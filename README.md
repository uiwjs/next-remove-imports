next-remove-imports
===

[![NPM Downloads](https://img.shields.io/npm/dm/next-remove-imports.svg?style=flat)](https://www.npmjs.com/package/next-remove-imports) [![Build & Deploy](https://github.com/uiwjs/next-remove-imports/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/next-remove-imports/actions/workflows/ci.yml)
[![Repo Dependents](https://badgen.net/github/dependents-repo/uiwjs/next-remove-imports)](https://github.com/uiwjs/next-remove-imports/network/dependents)

This is a plugin for [nextjs](https://github.com/vercel/next.js). The default behavior is to remove all `.less`/`.css`/`.scss`/`.sass`/`.styl` imports from all packages in node_modules.

> ⚠️ [CSS Imported by a Dependency](https://github.com/vercel/next.js/blob/master/errors/css-npm.md) [`#52`](https://github.com/uiwjs/react-md-editor/issues/52#issuecomment-848969341)
> - https://github.com/uiwjs/react-md-editor/issues/52#issuecomment-848969341
> - https://github.com/vercel/next.js/issues/9607

## Install

```shell
npm install next-remove-imports
# or
yarn add next-remove-imports
```

## Usage

```js
// next.config.js
const removeImports = require('next-remove-imports')({
  options: { },
})
module.exports = removeImports()
```

```js
// next.config.js
const removeImports = require('next-remove-imports')()
module.exports = removeImports({
  webpack(config, options) {
    return config
  },
});
```

```js
// next.config.js
const removeImports = require('next-remove-imports')({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$"
});

module.exports = removeImports({
  webpack(config, options) {
    return config
  },
});
```

```js
// next.config.js
const removeImports = require('next-remove-imports')();

module.exports = (phase, { defaultConfig }) => {
  return removeImports({
    ...defaultConfig
  });
};
```

## License

Licensed under the MIT License.
