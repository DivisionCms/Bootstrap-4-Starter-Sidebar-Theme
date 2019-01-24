const path = require('path');

module.exports = {

    module: {
        rules: [

            /**
             * Babel loader for use import and export ES6 modules
             */
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            /**
             * SASS loader for use scss file
             */
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },

            /**
             * Use URL LOADER for load fonts files in scss
             */
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            }
        ]
    },

    /**
     * Export app
     */
    entry: './js/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'js/dist')
    }
};
