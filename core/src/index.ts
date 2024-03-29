import { NextConfig } from 'next';
import { WebpackConfigContext } from 'next/dist/server/config-shared';

export type PluginOptions = {
  /**
   * @default "/node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/"
   */
  test?: RegExp;
  /**
   * @default "\\.(less|css|scss|sass|styl)$"
   */
  matchImports?: string;
}

const removeImports = (pluginOptions: PluginOptions = {}) => (nextConfig: NextConfig = {}): NextConfig => {
  const test = pluginOptions.test || /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/;
  const matchImports = pluginOptions.matchImports || "\\.(less|css|scss|sass|styl)$";
  return Object.assign({}, nextConfig, {
    webpack(config: any, options: WebpackConfigContext) {
      if (!options.isServer) {
        config.module.rules.unshift({
          test: test,
          loader: require.resolve('babel-loader', {
            paths: [process.cwd()]
          }),
          options: {
            plugins: [
              [
                require.resolve('babel-plugin-transform-remove-imports', {
                  // https://nodejs.org/api/modules.html#requireresolverequest-options
                  paths: [process.cwd()]
                }), {
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
export default removeImports
// @ts-ignore
export = removeImports