var path = require('path');
var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var TARGET = process.env.TARGET;
var ROOT_PATH =  require('./rootpath.js');

var common = {
    entry: {},
    resolve: {
        extensions: ['', '.js'],
        root: ROOT_PATH
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        libraryTarget: 'var'
    },
    externals: [{
        jquery: {
            var: 'jQuery',
            this: 'jquery',
            root: 'jQuery',
            amd: 'jquery',
            commonjs: 'jquery',
            commonjs2: 'jquery'
        },
        select2: 'window',
        util: 'util',
        classjs: 'classjs',
        'handlebars/runtime': {
            var: 'Handlebars',
            this: 'handlebars',
            root: 'Handlebars',
            amd: 'handlebars.runtime',
            commonjs2: 'handlebars/runtime',
            commonjs: 'handlebars/runtime'
        },
        'handlebars': {
            var: 'Handlebars',
            this: 'handlebars',
            root: 'Handlebars',
            amd: 'handlebars',
            commonjs: 'handlebars',
            commonjs2: 'handlebars'
        }
    }],
    plugins: [
		new webpack.BannerPlugin('build timestamp:'+JSON.stringify((function(){var date=new Date();return [date.getFullYear(),'-',date.getMonth()+1,'-',date.getDate(),' ',date.getHours(),':',date.getMinutes(),':',date.getSeconds(),'.',date.getMilliseconds()].join('');}())), {
			entryOnly :true
		})
	],
    module: {
        loaders: [{
                test: /\.hbs$/,
                loader: 'handlebars-loader?runtime=handlebars/runtime'
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader' }
        ]
    }
};

if (TARGET == 'build') {
    config = {
        plugins: [
            new webpack.dependencies.LabeledModulesPlugin()
        ],
        output: {
            pathinfo: true
        },
        debug: true,
        devtool: 'source-map'
    }
} else if (TARGET == 'compress') {
    config = {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ],				
		output: {
			path: path.resolve(ROOT_PATH, 'dist'),
			filename: '[name].bundle.min.js',
			chunkFilename: '[id].bundle.min.js',
			libraryTarget: 'var'
		},
        devtool: 'source-map'
    }
} else {
    config = {
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server'
        ],
        plugins: [
            new webpack.dependencies.LabeledModulesPlugin()
        ],
        output: {
            pathinfo: true
        },
        debug: true,
        devtool: 'source-map'
    };
}


module.exports = webpackMerge(common, config);
