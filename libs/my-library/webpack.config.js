const { merge } = require('webpack-merge');
const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation({
    ...moduleFederationConfig
  });
  let cfg = merge(federatedModules(config, context), {
    externals: {
      "react": "var window.react",
      "react-dom": "var window.reactDom"
    }
  });

  return cfg;
}