var rework = require('rework');
var calc = require('rework-calc');
var url = require('rework-plugin-url');
var vars = require('rework-vars')();
var variant = require('rework-font-variant');
var prefixes = require('autoprefixer')().rework;
var customMedia = require('rework-custom-media');
var limits = require('rework-ie-limits');
var colors = require('rework-plugin-colors');

module.exports = ClickCSS;

function ClickCSS (stylesheet, rework)
	var css = rework(cssString)
		.use(calc)
		.use(vars())
		.use(pseudos)
    		.use(variant)
    		.use(prefixes)
    		.use(customMedia)
    		.use(limits)
    		.use(colors)
		.use(rework.url(function(url){
   	 		return url;
  	}));

}
