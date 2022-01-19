.PHONY: init start build upgrade deploy

SHELL := /bin/bash

GIT_USER="Jake-Mok-Nelson"
WORKING_DIR="./jakenelson.cloud/"

init:
	yarn --cwd $(WORKING_DIR) install

upgrade:
	yarn --cwd $(WORKING_DIR) upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest

start: init upgrade
	yarn --cwd $(WORKING_DIR) start

build: init upgrade
	NODE_OPTIONS=--openssl-legacy-provider yarn --cwd $(WORKING_DIR) build

deploy: build
	NODE_OPTIONS=--openssl-legacy-provider GIT_USER=$(GIT_USER) yarn --cwd $(WORKING_DIR) deploy


