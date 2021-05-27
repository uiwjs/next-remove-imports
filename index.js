module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const test = pluginOptions.test || /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/;
  const matchImports = pluginOptions.matchImports || "\\.(less|css|scss|sass|styl)$";
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.isServer) {
        config.module.rules.unshift({
          test: test,
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              [
                require.resolve('babel-plugin-transform-remove-imports'), {
                  "test": matchImports
                }
              ]
            ]
          }
        });
      }
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    },
  })
}