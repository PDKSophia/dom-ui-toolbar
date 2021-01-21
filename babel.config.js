module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          ios: '10'
        }
      }
    ],
    '@babel/react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'react-css-modules',
      {
        filetypes: {
          '.less': {
            syntax: 'postcss-less'
          }
        },
        webpackHotModuleReloading: true,
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        autoResolveMultipleImports: true
      }
    ]
  ]
};
