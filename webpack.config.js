module.exports = {
  entry : './index.js',
  output:{
    path: './build',
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    contentBase: './',
    host:'0.0.0.0',
    port: 3000
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  }
};
