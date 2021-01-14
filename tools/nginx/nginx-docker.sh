#!/bin/sh
set -e
set -x

scriptDir=$(dirname $0)
dockerFile=$scriptDir/Dockerfile
imageName=nginx-react-playground:latest
port=${APP_PORT:-80}

build() {
    docker build -f "$dockerFile" -t "$imageName" .
}

run() {
    printf "Application started. To check it open link http://localhost:%s\n\n" "$port"
    docker run -p "$port":80 "$imageName"
}

case $1 in
    build)
        build
        ;;
    run)
        run
        ;;
    *)
        printf "\nError. unknown command: \"%s\",\naccepted: build | run\n" "$1"
        exit 13
        ;;
esac