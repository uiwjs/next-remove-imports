Preview Example: https://next-remove-imports-example.vercel.app

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
