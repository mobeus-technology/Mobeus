
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, args) => {

  const devMode = args.mode !== "production";

  return{

  	  mode:'development',
  	  entry: './src/app.js',
	  output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: 'bundle.[hash:4].js',
	    publicPath: '/'
	  },

       performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
  },

	  devServer: {
	    contentBase: path.join(__dirname, '/dist'),
	    compress: true,
	    port: 9000,
	    stats: 'errors-only'
	  },
	   module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: "file-loader",
                    options: {
                        publicPath: "public/",
                        outputPath: "public/"
                    }
                }
            ]
        },

	  plugins: [

	  	new CleanWebpackPlugin(['dist'], {
                root: __dirname,
                verbose: true,
                dry: false
            }),

	    new HtmlWebpackPlugin({
		  	title: 'Custom template',
		  	hash:true,
		    // Load a custom template (lodash by default see the FAQ for details)
		    template: './src/index.html',
            inlineSource: '.(js|css)$'
		}),

		 new MiniCssExtractPlugin({
                filename: devMode ? "[name].css" : "[name].[hash:4].css",
                chunkFilename: devMode ? "[id].css" : "[id].[hash:4].css"
            }),


		]


  }


};
