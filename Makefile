.PHONY: init start build deploy

init:
	yarn --cwd ./jakenelson.cloud/ install

start: init
	yarn --cwd ./jakenelson.cloud/ start

build: init
	yarn --cwd ./jakenelson.cloud/ build

deploy: build
	GIT_USER=Jake-Mok-Nelson yarn --cwd ./jakenelson.cloud/ deploy
