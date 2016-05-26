
module.exports = {
  entry : './index.js',
  outut:{
    path: './build',
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    contentBase: './',
    port: 3000
  },
  module: {
    loaders: [
      {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
      }
    ]
  }
};
