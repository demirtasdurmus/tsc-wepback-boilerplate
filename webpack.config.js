const path = require("path");

module.exports = {
    name: "drag-drop-app",
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
        },
        compress: true,
        port: 3000
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};