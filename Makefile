MOCHA_PATH = ./node_modules/.bin/mocha

install:
	@npm install

update:
	@npm update

pack:
	@npm pack

test:
	@NODE_ENV=test $(MOCHA_PATH) \
		--recursive \
		--reporter dot
		
test-spec:
	@NODE_ENV=test $(MOCHA_PATH) \
		--recursive \
		--reporter spec

test-w:
	@NODE_ENV=test $(MOCHA_PATH) \
		--recursive \
		--reporter dot \
		--growl \
		--watch

.PHONY: install update pack
.PHONY: test test-spec test-w
