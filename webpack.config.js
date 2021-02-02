const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = [new CleanWebpackPlugin()];

if(!devMode) {
    plugins.push(new MiniCssExtractPlugin({
        filename: "bundle.css"
        })
    )
}

module.exports = {
  entry: './src/javascript/index.js',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                        presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /.s[ac]ss$/i,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: '/images/[name].[ext]',
                        esModule: false
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                    outputPath: 'fonts'
                    }
                }
            ]
        }
    ]
  },

    plugins,

    resolve: {
        alias: {
          'images': path.resolve(__dirname, 'src/images'),
          'components': path.resolve(__dirname, 'src/javascript/components'),
          'productComponents': path.resolve(__dirname, 'src/javascript/product'),
            'pages': path.resolve(__dirname, 'src/javascript/pages')
        },
        // fallback: {
        //     util: require.resolve("util/"),
        //     path: require.resolve("path-browserify"),
        //     url: require.resolve("url/"),
        //     crypto: false,
        //     https: false,
        //     vm: false 
        // }
    },

    mode: devMode ? 'development' : 'production'
};