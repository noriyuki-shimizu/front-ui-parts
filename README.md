# front-ui-parts

Vue3 + Vite における UI ライブラリ

## UI Catalog

[Storybook](https://65fa8ee4a2f886d4907b4547-fwsgnclymw.chromatic.com/)

## Install

```bash
npm i -S front-ui-parts
```

> [!WARNING]
> TypeScript v5.0 以上をお使いの方は tsconfig.json の `compilerOptions.resolvePackageJsonExports` を false に設定してください

## Developer Guide

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:ut
```

### Lint with [ESLint](https://eslint.org/) / [dprint](https://dprint.dev/) / [StyleLint](https://stylelint.io/)

```sh
npm run lint
```
