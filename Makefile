public/main.js: elm.json src/Main.elm public/index.html
	elm make src/Main.elm --optimize --output public/main.js

clean:
	-rm public/main.js

.PHONY: clean
