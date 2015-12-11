#!/usr/bin/env bash

# TODO: Bump package version and publish

set -e

mkdir -p tmp/static

cp node_modules/normalize.css/normalize.css tmp/static/normalize.css
cp node_modules/suitcss-base/lib/base.css tmp/static/suitcss-base.css
cp node_modules/github-markdown-css/github-markdown.css tmp/static/github-markdown.css

node_modules/.bin/browserify -t babelify -o tmp/static/bundle.js index.js
node_modules/.bin/babel-node output-view.js > tmp/index.html

cd tmp
surge --project ./ --domain autokitty-devcards.surge.sh
