
var path   = require("path")
    evento = require("evento"),
    _      = require("underscore");

function Filter() {

};

Filter.prototype = {

    request: null,

    camelCaseName: function()
    {
        var that = this;

        this.request.camelCasedName = this.request.capitalizedName.replace(
            /-([a-z])/g,
            function (m, w) {
                return that.capitalize(w);
            });
        return this;
    },

    capitalize: function(text)
    {
        return [
            text.charAt(0).toUpperCase(),
            text.substring(1).toLowerCase()
        ].join("");
    },

    capitalizeName: function()
    {
        this.request.capitalizedName = this.capitalize(this.request.name);
        return this;
    },

    dir: function()
    {
        this.request.dir = path.resolve(this.request.args[0]) + "/" + this.request.name;

        delete this.request.args;

        return this;
    },

    filter: function()
    {
        this.dir()
            .capitalizeName()
            .namespace()
            .camelCaseName();

        evento.trigger("info", "Dir: "+this.request.dir);
        evento.trigger("filter");
    },

    namespace: function()
    {
        this.request.namespace = _.isString(this.request.namespace)
            ? this.capitalize(this.request.namespace)
            : '';
        return this;
    }
};

module.exports = new Filter();