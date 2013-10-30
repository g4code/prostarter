
var path = require("path");

function Filter() {

};

Filter.prototype = {

    request: null,

    filter: function()
    {
        this.request.dir = path.resolve(this.request.args[0]);
    }
};

module.exports = new Filter();