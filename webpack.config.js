const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' when you are done
    entry: './src/index.js', // This is your main controller file
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans the dist folder before every build
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use your existing HTML as a template
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};