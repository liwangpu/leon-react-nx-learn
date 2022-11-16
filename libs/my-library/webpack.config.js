const path = require('path');
const { merge } = require('webpack-merge');
const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
// const { ModuleFederationPlugin } = require('webpack').container;

// Object.defineProperty(RegExp.prototype, "toJSON", {
//   value: RegExp.prototype.toString
// });

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation({
    ...moduleFederationConfig
  });
  let cfg = merge(federatedModules(config, context), {
    externals: {
      "react": "react",
      // "react-dom": "reactDom",
    },
  });

  return cfg;
}