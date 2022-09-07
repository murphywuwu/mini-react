const path = require('path');

module.exports = function override(config, env) {
  const { module, resolve } = config;
  const { rules } = module;
  const { alias, plugins } = resolve;
  
  config.module.rules = [
    ...rules,
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      exclude: /node_modules/,
      options: {
        presets: ["@babel/preset-react"]
      }
    }
  ];

  // this will remove the CRA plugin that prevents to import modules from 
  // outside the `src`  directory, useful if you use a different directory
  config.resolve.plugins = plugins.filter(
    p => p.constructor.name !== "ModuleScopePlugin"
  );

  config.resolve.alias = {
    '@packages': path.resolve(__dirname, '../../packages/'),
    ...alias
  }

  return config;
}