#!/usr/bin/env bash

set -e

# Bump

echo 'Bumping version ...'

git remote set-url origin git@github.com:jedrichards/autokitty-components.git
git config --global user.email "machine@seisaku.co.uk"
git config --global user.name "seisaku-machine"
git fetch --unshallow origin || true
git fetch origin master:master
git checkout master
npm version patch -m "Release %s --skip-ci"
git push origin master --tags

# Publish

SHOULD_PUBLISH=$(node_modules/.bin/babel-node should-publish.js)
if [ $SHOULD_PUBLISH == 'true' ]; then
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

npm run browserify
cp bundle.js tmp/static/bundle.js
node_modules/.bin/babel-node output-view.js > tmp/index.html

cd tmp
surge --project ./ --domain autokitty-components.surge.sh
