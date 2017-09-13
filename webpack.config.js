const fs                = require('fs');
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const index             = `${__dirname}/index.html`;
const demo              = `${__dirname}/demo/demo.js`;
const component         = `${__dirname}/index.js`;
const icons             = `${__dirname}/node_modules/pearson-elements/dist/icons/p-icons-sprite-1.1.svg`;
const elements          = `${__dirname}/node_modules/pearson-elements/dist/css/elements.css`;
const fontsDir          = `${__dirname}/node_modules/pearson-elements/dist/fonts/`;
const fonts             = fs.readdirSync(fontsDir, 'utf-8');
const fontsList         = fonts.map(font => fontsDir + font);


module.exports = {
  entry: {
    demo             : [ demo ],
    dev              : [ elements, icons ],
    dist             : [ component ],
    fonts            : fontsList
  },
  output: {
    path          : path.resolve(__dirname, 'build'),
    filename      : '[name].pagination.js',
    publicPath    : '/pagination',
    libraryTarget : 'umd'
  },
  devtool: "source-map",
  devServer: {
    host               : "0.0.0.0",
    port               : 8081,
    publicPath         : "/pagination",
    hot                : true,
    https              : false,
    overlay            : true,
    watchContentBase   : true,
    disableHostCheck   : true,
    historyApiFallback : true,
    watchOptions       : { poll: true },
    contentBase        : path.join(__dirname, "build")
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NamedModulesPlugin()
  ]
};


// module.exports = {
//   entry: {
//    dev: ['webpack/hot/dev-server', './demo/demo.js'],
//    dist: ['./index.js']
//   },
//   output: {
//     path: './',
//     filename: 'build/[name].pagination.js',
//     libraryTarget: 'umd'
//   },
//   devtool: 'cheap-module-source-map',
//   externals: [
//     {
//       'react': {
//         root: 'React',
//         commonjs2: 'react',
//         commonjs: 'react',
//         amd: 'react'
//       }
//     },
//     {
//       'react-dom': {
//         root: 'ReactDOM',
//         commonjs2: 'react-dom',
//         commonjs: 'react-dom',
//         amd: 'react-dom'
//       }
//     }
//   ],
//   contentBase: './demo', // for webpack dev server
//   module: {
//     preLoaders: [
//       {
//         test: /\.js$/,
//         loader: 'eslint',
//         exclude: /node_modules/
//       }
//     ],
//     loaders: [
//       {
//         test: /\.scss$/,
//         loader: 'style!css!sass' // sass -> css -> javascript -> inline style
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel',
//         query: {
//           cacheDirectory: true,
//           presets: ['es2015', 'react', 'stage-0']
//         }
//       },
//       {
//         test: /\.json$/,
//         loader: 'json'
//       }
//     ]
//   }
// };
