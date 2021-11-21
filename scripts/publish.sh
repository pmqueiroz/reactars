#!/bin/bash

GREEN="\u001b[32m"
MAGENTA="\u001b[35m"
CYAN="\u001b[36m"
YELLOW="\033[33m"
RESET="\033[0m"

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')

printf "$MAGENTA\n"
printf "Publishing new version $PACKAGE_VERSION to NPM$RESET"

read -p " confirm (y/n)? " choice
case "$choice" in 
y|Y ) printf "\nGenerating build...! \n";;
* ) printf "$YELLOW"; printf "\n!! fix the versioning before running the script !!$RESET\n"; exit 126;;
esac

printf "$YELLOW[1/4]$RESET$GREEN Removing old build folders...\n"
rm -rf node_modules .next dist

printf "$YELLOW[2/4]$RESET$GREEN Reinstalling dependencies...\n"
yarn install --silent

printf "$YELLOW[3/4]$RESET$GREEN Build package...\n"
yarn build

printf "$YELLOW[4/4]$RESET$GREEN Publishing...\n"

npm publish