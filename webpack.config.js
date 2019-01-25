const pkg = require('./package.json');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: `${pkg.name}.js`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
    ],
  },
  devServer: {
    contentBase: './dev',
  },
  externals: {
    'indigo-player': 'IndigoPlayer',
  }
};
