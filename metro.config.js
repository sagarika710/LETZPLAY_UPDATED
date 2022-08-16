/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// var blacklist = require('metro-react-native-babel-preset/src/');
// var blacklist = require()

module.exports = {
  // resolver: {
  //   blacklistRE: blacklist([
  //     /nodejs-assets\/.*/,
  //     /\/android\/.*/,
  //     /\/ios\/.*/,
  //   ]),
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

