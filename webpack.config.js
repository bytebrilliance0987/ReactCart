/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		index: path.resolve(__dirname, "src/index.tsx"),
	},
	devtool: false,
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.html$/,
				use: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	devServer: {
		static: [path.join(__dirname, "dist")],
		compress: true,
		port: 9000,
		hot: true,
		liveReload: false,
	},
};
