const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@model': path.resolve(__dirname, '../src/model/'),
      '@common': path.resolve(__dirname, '../src/common/'),
      '@components': path.resolve(__dirname, '../src/components/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        // 使用 babel-loader 来编译处理 js 和 jsx 文件
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  }
};
