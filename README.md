next-remove-imports
---

This is a plugin for [nextjs](https://github.com/vercel/next.js). The default behavior is to remove all `.less`/`.css`/`.scss`/`.sass`/`.styl` imports from all packages in node_modules.

> ⚠️ [CSS Imported by a Dependency](https://github.com/vercel/next.js/blob/master/errors/css-npm.md) [`#52`](https://github.com/uiwjs/react-md-editor/issues/52#issuecomment-848969341)

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
})
```

```js
// next.config.js
const removeImports = require('next-remove-imports')({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$"
})

module.exports = removeImports({
  webpack(config, options) {
    return config
  },
})
```
