module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: 'src/',
        rootPathSuffix: 'src',
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathPrefix: 'src/',
          rootPathSuffix: 'src',
        }
      ]
    }
  }
};
