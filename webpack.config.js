const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    output:{
        filename: 'app.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new WebpackPwaManifestPlugin({
            name: 'Takocinemas - La mejor app de cine',
            short_name:'Takocinemas',
            description:'Una pwa sencilla',
            background_color:'#fff',
            theme_color:'#b1a',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                }
            ]  
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://res.cloudinary.com'),
                    handler: 'CacheFirst',
                    options:{
                        cacheName:'images'
                    }
                }
            ]
        })
    ],
    module:{
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}