const path = require('path');
const { merge } = require('webpack-merge');
// const ModuleFederationPlugin = require('@nrwl/react/module-federation');
const { ModuleFederationPlugin } = require('webpack').container;

Object.defineProperty(RegExp.prototype, "toJSON", {
  value: RegExp.prototype.toString
});

module.exports = (config, ctx) => {
  let cfg = merge(config, {
    mode: 'development',
    // module: {
    //   rules: [
    //     {
    //       test: /\.tsx?$/,
    //       use: 'ts-loader',
    //       exclude: /node_modules/,
    //     },
    //     {
    //       test: /\.less$/,
    //       use: [
    //         { loader: 'style-loader' },
    //         { loader: 'css-loader' },
    //         {
    //           loader: 'less-loader',
    //           options: {
    //             lessOptions: {
    //               javascriptEnabled: true
    //             },
    //           },
    //         }
    //       ]
    //     }
    //   ]
    // },
    plugins: [
      // new ModuleFederationPlugin({
      //   name: 'primary-component-package',
      //   filename: 'remoteEntry.js',
      //   library: { type: 'var', name: 'primaryComponentPackage' },
      //   exposes: {
      //     './Dynamic': 'libs/primary-component-package/src/dynamic.ts',
      //   },
      // })
    ]
  });

  // console.log(JSON.stringify(cfg));

  return cfg;
};


// module.exports = (config, ctx) => {
//   const cfg = {
//     ...config,
    
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: 'ts-loader',
//           exclude: /node_modules/,
//         },
//         {
//           test: /\.less$/,
//           use: [
//             { loader: 'style-loader' },
//             { loader: 'css-loader' },
//             {
//               loader: 'less-loader',
//               options: {
//                 lessOptions: {
//                   javascriptEnabled: true
//                 },
//               },
//             }
//           ]
//         }
//       ]
//     },
//     plugins: [
//       // new ModuleFederationPlugin({
//       //   name: 'primary-component-package',
//       //   filename: 'remoteEntry.js',
//       //   library: { type: 'var', name: 'primaryComponentPackage' },
//       //   exposes: {
//       //     './Dynamic': 'libs/primary-component-package/src/dynamic.ts',
//       //   },
//       // })
//     ]
//   };

//   // console.log(JSON.stringify(config));
  
//   return cfg;
// };
