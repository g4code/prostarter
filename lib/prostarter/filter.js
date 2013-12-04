
var path   = require("path")
    evento = require("evento"),
    _      = require("underscore");

function Filter() {

};

Filter.prototype = {

    request: null,

    capitalize: function(text)
    {
        return [
            text.charAt(0).toUpperCase(),
            text.substring(1).toLowerCase()
        ].join("");
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
            .namespace();

        evento.trigger("info", "Dir: "+this.request.dir);
        evento.trigger("filter");
    },

    namespace: function()
    {
        this.request.namespace = _.isString(this.request.namespace)
            ? this.capitalize(this.request.namespace)
            : '';
    },

    capitalizeName: function()
    {
        this.request.capitalizedName = this.capitalize(this.request.name);
        return this;
    }
};

module.exports = new Filter();