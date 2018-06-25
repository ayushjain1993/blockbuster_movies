#!/usr/bin/env bash
set -xeuo pipefail

docker build -t blockbuster_movies.image -f ./scripts/Dockerfile .
