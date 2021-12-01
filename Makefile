.PHONY: init start build deploy

SHELL := /bin/bash

GIT_USER="Jake-Mok-Nelson"
WORKING_DIR="./jakenelson.cloud/"

init:
	yarn --cwd $(WORKING_DIR) install

start: init
	yarn --cwd $(WORKING_DIR) start

build: init
	yarn --cwd $(WORKING_DIR) build

deploy: build
	GIT_USER=$(GIT_USER) yarn --cwd $(WORKING_DIR) deploy
