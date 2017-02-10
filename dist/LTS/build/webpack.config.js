var path = require('path');
var webpack = require("webpack");
var webpackMerge = require('webpack-merge');
var ROOT_PATH =  require('./rootpath.js');
var common =  require('./webpack.common.script.js');
var tplsPlugin = require('./webpack.tpls-plugin.js');


module.exports = webpackMerge(common, {    
	tpls:{
	},
    entry: {
		'app':[path.resolve(ROOT_PATH, 'js/3rd/handlebars.runtime-v4.0.5.js'),path.resolve(ROOT_PATH, 'dev/index.js')],
		'app.preview':[path.resolve(ROOT_PATH, 'js/3rd/handlebars.runtime-v4.0.5.js'),path.resolve(ROOT_PATH, 'dev/preview.js')],
    },
    plugins: [
		new tplsPlugin()
	]
});

