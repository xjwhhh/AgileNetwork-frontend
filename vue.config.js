const webpack = require('webpack')

module.exports = {
    lintOnSave: false,
    baseUrl: process.env.VUE_BASE_URL || '/',
    productionSourceMap: false,
    configureWebpack: {
        module: {
            // Fix for flot resize
            rules: [{
                test: /jquery\.flot\.resize\.js$/,
                use: 'imports-loader?this=>window'
            }]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    transpileDependencies: [
        'resize-detector' // vue-echarts
    ]
}