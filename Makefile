.PHONY clean start build release

# Remove old versions of the website
clean:
	rm -rf ./build
	rm -rf ./docs

# Start the webserver and open it on localhost
start:
	cd website
	npm run start

# Build the website and place it in /build
build:
	cd website
	npm run build

release:
	mkdir docs
	cp -r build docs
	cp -r additional-assets docs
