var path = require('path');
var SRC = path.join(__dirname,'src/');
var NODE_MODULES = path.join(__dirname,'node_modules/');
var config = {
	entry:'./src',
	output:{
		path: './dist',
		filename: 'basic-redux-tutorial.js'
	},
  resolve: {
  	root: [SRC,NODE_MODULES],
  	alias: {
  		'actions': path.join(SRC, 'actions')
  	}
  },
  module: {
  	loaders: [
    	{
    		test: /\.js$/,
    		loaders: ['babel']
    	},
    ]
  }
};

module.exports = config;