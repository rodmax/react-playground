#!/bin/sh
set -e
destPath=src/generated-to-check
rm -rf $destPath
npm run g:slice toCheck $destPath/slice