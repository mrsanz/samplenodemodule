# node-module

> sample node module to illustrate some code coverage issues with babel

## Usage

To see the coverage difference with newer modules checkout the project and run:
```
npm i
npm run coverage && npm run coverage:open
```

To see the fully covered code change to the oldDeps branch:
```
git checkout oldDeps
rm -rf node_modules
npm i
npm run coverage && npm run coverage:open
```

I ran the same test on both the transpiled code and on the pre-transpipled code
so you could get a better picture of what was going on in parallel.
