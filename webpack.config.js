module.exports = {
  entry: {
    app: __dirname + "/assets/scripts/app.js",
    vendor: __dirname + "/assets/scripts/vendor.js"
  },
  output: {
    path: __dirname + "/public/scripts",
    filename: "[name].js"
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