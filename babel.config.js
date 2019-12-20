const babelConfig = (api) => {
  api.cache(true);
  const presets = ['babel-preset-expo'];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};

module.exports = babelConfig;
