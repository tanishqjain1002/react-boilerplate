require('dotenv').load()
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssExtract = new MiniCssExtractPlugin({
	filename: '[name].css'
})

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [
					'sass-loader',
					MiniCssExtractPlugin.loader,
					'css-loader'
				] 
			},
			{
				test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|ttf|eot|ico)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		cssExtract,
		htmlWebpackPlugin
	]
}

