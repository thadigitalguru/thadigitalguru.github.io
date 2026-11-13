# frozen_string_literal: true

require "html-proofer"
require "yaml"

external = ARGV.delete("--external")
directory = ARGV.shift || "_site"
abort "Usage: bundle exec ruby scripts/check-html.rb [directory] [--external]" unless ARGV.empty?
site_url = YAML.load_file("_config.yml").fetch("url").delete_suffix("/")
options = {
  disable_external: !external,
  check_external_hash: false,
  checks: %w[Links Images Scripts OpenGraph],
  swap_urls: { %r{\A#{Regexp.escape(site_url)}(?:/|\z)} => "/" },
}

if external
  options[:ignore_urls] = [%r{\Ahttps?://(?:www\.)?(?:linkedin\.com|twitter\.com|x\.com|facebook\.com)/}]
  options[:ignore_status_codes] = [429, 503]
  options[:typhoeus] = { timeout: 30, connecttimeout: 10, followlocation: true }
end

HTMLProofer.check_directory(directory, options).run
