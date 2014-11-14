//#MODULE - Ticker
//> Author: Balasubramanian Karthikesan
//>
//> Create Date: Nov 10, 2014
//>
//##DESCRIPTION:
//This will manage dynamic watch list
define(["jquery", "backbone", "tickerModel", "handlebars"], function ($, Backbone, TickerModel, Handlebars) {

    "use strict";

    var tickerView = Backbone.View.extend({
        templateUrl: "hbsTemplates/ticker",

        initialize: function () {
            var self = this;
            self.render();
        },

        render: function () {
            var self = this;
            self.getTicker();
        },

        getTicker: function () {
            var self = this,
                ticker = new TickerModel(),
                callback = {
                    success: function (res) {
                        // bind data to DOM
                        require([self.templateUrl], function (template) {
                            $("#loadTicker").html(template({
                                ticker: res.attributes.accounts
                            }));
                        });
                    },
                    failure: function () {
                        console.log("Error in url");
                    }
                };
            // invoke watch list data
            ticker.fetch(callback);
        }

    });

    return tickerView;

});