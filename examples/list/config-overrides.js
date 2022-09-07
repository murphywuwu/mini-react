module.exports = function override(config, env) {
  const { module } = config;
  const { rules } = module;
  
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
  ]

  return config;
}