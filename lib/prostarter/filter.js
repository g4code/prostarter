
var path   = require("path")
    evento = require("evento");

function Filter() {

};

Filter.prototype = {

    request: null,

    filter: function()
    {
        this.request.dir = path.resolve(this.request.args[0]) + "/" + this.request.name;

        delete this.request.args;

        evento.trigger("info", "Dir: "+this.request.dir);
        evento.trigger("filter");
    }
};

module.exports = new Filter();