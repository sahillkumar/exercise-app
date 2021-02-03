var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //for creating seperate css file in dist file

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        // new MiniCssExtractPlugin()           //for creating seperate css file in dist file
    ]

}