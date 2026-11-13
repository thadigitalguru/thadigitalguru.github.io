# frozen_string_literal: true

require "json"
require "nokogiri"
require "pathname"
require "uri"
require "yaml"

root = Pathname.new("_site").expand_path
site_url = YAML.load_file("_config.yml").fetch("url").delete_suffix("/")
schemas = 0
Dir.glob(root.join("**/*.html")).each do |path|
  html = Nokogiri::HTML(File.read(path))
  html.css('script[type="application/ld+json"]').each do |script|
    JSON.parse(script.text)
    schemas += 1
  end
end

sitemap = Nokogiri::XML(File.read(root.join("sitemap.xml"))) { |config| config.strict.nonet }
urls = sitemap.xpath('//*[local-name()="loc"]').map(&:text)
abort "Sitemap contains no URLs" if urls.empty?
urls.each do |url|
  abort "Unexpected sitemap origin: #{url}" unless url.start_with?("#{site_url}/")
  relative = URI::DEFAULT_PARSER.unescape(url.delete_prefix("#{site_url}/"))
  target = root.join(relative)
  target = target.join("index.html") if target.directory?
  abort "Missing sitemap destination: #{url}" unless target.file?
end
Nokogiri::XML(File.read(root.join("feed.xml"))) { |config| config.strict.nonet }
puts "Validated #{schemas} structured-data blocks, #{urls.length} sitemap destinations, and feed XML."
