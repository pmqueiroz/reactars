const path = require('path')

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'dist', 'index.jsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
		]
	}
}
