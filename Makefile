
nomin:
	esbuild --bundle --outfile=build.js main.ts
	cat build.js | pbcopy

all:
	esbuild --minify --bundle --outfile=build.js main.ts
	cat build.js | pbcopy
