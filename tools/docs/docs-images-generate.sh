#!/bin/sh
set -e
set -v
PATH=$(npm bin)$PATH
export PATH
imagesDir=docs/images

depcruise --config tools/depcruise/depcruise-graph.src.js \
    --output-type dot src | dot -T svg > $imagesDir/src-code-graph.svg

depcruise --config tools/depcruise/depcruise-graph.api.js \
    --output-type dot src/api/pizza-store/user | dot -T svg > $imagesDir/api-code-graph.svg

# cspell:words mmdc
# To make mmdc working please install "npm i -g @mermaid-js/mermaid-cli" locally
mmdc -i docs/images/dependencies-layers.mmd -o $imagesDir/dependencies-layers.png