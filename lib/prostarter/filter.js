
var path   = require("path")
    evento = require("evento");

function Filter() {

};

Filter.prototype = {

    request: null,

    dir: function()
    {
        this.request.dir = path.resolve(this.request.args[0]) + "/" + this.request.name;

        delete this.request.args;

        return this;
    },

    filter: function()
    {
        this.dir()
            .ucfName();

        evento.trigger("info", "Dir: "+this.request.dir);
        evento.trigger("filter");
    },

    ucfName: function()
    {
        this.request.ucfName = [
            this.request.name.charAt(0).toUpperCase(),
            this.request.name.substring(1).toLowerCase()
        ].join("");
    }
};

module.exports = new Filter();