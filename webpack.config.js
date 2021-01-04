const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    resolve: {
        extensions: ['.js', '.jsx']
      },
    devtool:false,
    module:{
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      },
      resolve:{
        alias:{
          '@material-ui/core':'@material-ui/core/es'
        }
      },
      plugins: [new HtmlWebpackPlugin({
          template:'index.html'
      })
    ]
}