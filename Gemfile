# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.3.2"
gem "webrick" # Required for Ruby 3.0+
gem "jekyll-sass-converter", "~> 2.2"
gem "csv", "~> 3.3" # Jekyll 4.3 requires CSV, which is no longer bundled with Ruby 3.4.
gem "base64", "~> 0.3" # Required by Jekyll's YAML dependency on Ruby 3.4.

group :development do
  gem "html-proofer", "5.2.3", require: false
end

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:windows]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
