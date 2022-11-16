module.exports = {
  name: 'my-library',
  exposes: {
    './button': './src/components/Button/index.tsx',
  },
  // shared: {
  //   "@nrwl/react": {
  //     eager: true,
  //     singleton: true,
  //     strictVersion: false,
  //   }
  // }
  // shared: {
  //   'react': {
  //     eager: true,
  //     singleton: true,
  //     strictVersion: false,
  //     // requiredVersion: '18.2.0'
  //   },
  //   'react-dom': {
  //     eager: true,
  //     singleton: true,
  //     strictVersion: false,
  //     // requiredVersion: '18.2.0'
  //   }
  // },
};
