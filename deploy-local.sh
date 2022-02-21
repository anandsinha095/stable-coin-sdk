#!/bin/bash

echo "starting to deploy npm package locally"

yarn build:clean && yarn build && git add . && git commit -m $2 && npm version $1 && cd dist && cp ../package.json package.json && npm link

echo "New version for npm package usdao-sdkss deployed locally"