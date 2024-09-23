# **use-lockbodyscroll**

Use useLockBodyScroll to temporarily disable scrolling on the document body.

## Installation

You can install the package using **npm**, **yarn**, or **pnpm**.

```bash
pnpm add use-lockbodyscroll

yarn install use-lockbodyscroll

npm install use-lockbodyscroll
```

## Usage

```tsx
import { useLockBodyScroll } from "use-lockbodyscroll";

const { lockScroll, unlockScroll } = useLockBodyScroll();
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/use-lockbodyscroll
