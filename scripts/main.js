var paths = {
	jquery: "../libs/jquery/jquery-2.1.1.min",
	backbone: "../libs/backbone/backbone",
	underscore: "../libs/underscore/underscore",
	handlebars: "../libs/handlebars/handlebars-v2.0.0",
	tickerModel: "../scripts/models/ticker",
	ticker: "../scripts/views/ticker",
	hbsTemplates: "../templates"
}

var shims = {
	backbone: {
        deps: [ 'underscore', 'jquery' ],
        exports: 'Backbone'
    },
	underscore: {
        exports: '_'
    },
    handlebars: {
        exports: 'Handlebars'
    }
}

require.config({
	shim: shims,
	paths: paths
});

// initialize ticker view
require(["ticker"], function(Ticker) {
	var ticker = new Ticker();
	ticker.initialize();
});