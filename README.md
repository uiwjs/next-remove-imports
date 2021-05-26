next-remove-imports
---

> ⚠️ [CSS Imported by a Dependency](https://github.com/vercel/next.js/blob/master/errors/css-npm.md)

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