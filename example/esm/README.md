Preview Example: https://next-remove-imports-example.vercel.app

## Usage

```javascript
// next.config.mjs
import removeImports from 'next-remove-imports'

/** @type {function(import("next").NextConfig): import("next").NextConfig}} */
const removeImportsFun = removeImports({
  options: { },
});

export default removeImportsFun({
  webpack(config, options) {
    return config
  },
});
```