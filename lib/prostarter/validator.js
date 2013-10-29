
var _  = require("underscore"),
    fs = require("fs");

function Validator()
{

};

Validator.prototype = {

    request: null,


    checkArgs: function()
    {
        if (!this.isArgsValid()) {
            throw "no dir argument";
        }

        try {
            this.isArgDir();
        }
        catch (e) {
            throw this.request.args[0] + " is not a directory";
        }

        return this;
    },

    isArgDir: function()
    {
        stats = fs.lstatSync(this.request.args[0]);

        if (!stats.isDirectory()) {
            throw "err";
        }
    },

    isArgsValid: function()
    {
        return _.isArray(this.request.args)
            && this.request.args.length == 1;
    },

    validate: function()
    {
       this.checkArgs();
    }
};

module.exports = new Validator();