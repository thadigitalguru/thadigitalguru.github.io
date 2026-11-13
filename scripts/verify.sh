#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll build
node --test scripts/*.test.mjs
node scripts/check-navigation.mjs
bundle exec ruby scripts/check-html.rb
bundle exec ruby scripts/check-metadata.rb
