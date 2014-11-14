define(["backbone"], function (Backbone) {

    "use strict";

    var tickerModel = Backbone.Model.extend({
        url: function () {
            var tickerapi = "ticker.json";
            return tickerapi;
        }
    });

    return tickerModel;

});