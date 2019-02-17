# Helping Hand

Javascript utility library written in typescript.

## Install
```bash
npm i helping_hand
```

```bash
import { module } from 'helping_hand'
```

## Build
Typescript compiler for type declarations. Rollup and babel used for bundling.

Build an output file and type declarations
```bash
npm run build
```

Run types and bunding in watch mode
```bash
npm run build:watch
```

Run only types
```bash
npm run build:types
```

Run type checking
```bash
npm run type-check
```

## Local Development
To run locally you will want to `npm link` the package.

NOTE: If you link then unlink a package you must run your install command again.

```bash
* Inside helping_hand
npm link
```

```bash
* Inside Application
npm link helping_hand
```

## Testing
Testing uses Jest and 100% coverage is required.

Run tests in watch mode
```bash
npm run test
```

Run tests coverage report
```bash
npm run test:coverage
```
