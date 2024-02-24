const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = {
    output: {
        path : path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        hot: true ,  
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  //regex to match any js or jsx file
                exclude: /node-modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                       presets: ['@babel/preset-env', '@babel/preset-react'],
                     },
                }
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    // plugins: [new MiniCssExtractPlugin()],
};
