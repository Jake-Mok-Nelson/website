.PHONY: init start build deploy

SHELL := /bin/bash

GIT_USER="Jake-Mok-Nelson"
GH_TOKEN=$(GH_TOKEN)
WORKING_DIR="./jakenelson.cloud/"

init:
	yarn --cwd $(WORKING_DIR) install

start: init
	yarn --cwd $(WORKING_DIR) start

build: init
	yarn --cwd $(WORKING_DIR) build

deploy: build
	GIT_USER=$(GIT_USER) GH_TOKEN=$(GH_TOKEN) yarn --cwd $(WORKING_DIR) deploy
