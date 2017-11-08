var webpack   = require('webpack');
var path 	    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist');
var APP_DIR   = path.resolve(__dirname, 'public/src/');

var config = {
  entry: [
    APP_DIR + '/js/index.jsx',
    APP_DIR + '/sass/main.scss'
  ],
 
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
 
  module: {
    rules:[
      {
        test: /\.jsx$/,
        include: APP_DIR,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-1']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },

    ]

  },
  
  devtool: 'inline-source-map',

  resolve: {
     extensions: [".js", ".jsx", ".sass"]
  },

  devServer: {
    inline : true,
    historyApiFallback: true,
    contentBase: './'
  }

};

module.exports = config;