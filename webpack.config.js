module.exports = {
  entry: __dirname + "/assets/scripts/app.js",
  output: {
    path: __dirname + "/public/scripts",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};