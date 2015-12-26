#!/usr/bin/env bash

set -e

# Bump

echo 'Bumping version ...'

git config --global user.email "contact@codeship.com"
git config --global user.name "Codeship"
git fetch --unshallow origin || true
git fetch origin master:master
git checkout master
npm version patch -m "Release %s --skip-ci"
git push origin master --tags

# Publish

should_publish=$(node_modules/.bin/babel-node should-publish.js)
if [ $should_publish == 'true' ]; then
  echo 'Publishing to NPM ...'
  echo -e "$NPM_USERNAME\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login
  npm publish
fi

# Deploy

echo 'Deploying to Surge ...'

mkdir -p tmp/static

cp node_modules/normalize.css/normalize.css tmp/static/normalize.css
cp node_modules/suitcss-base/lib/base.css tmp/static/suitcss-base.css
cp node_modules/github-markdown-css/github-markdown.css tmp/static/github-markdown.css

node_modules/.bin/browserify -t babelify -o tmp/static/bundle.js index.js
node_modules/.bin/babel-node output-view.js > tmp/index.html

cd tmp
surge --project ./ --domain autokitty-components.surge.sh
