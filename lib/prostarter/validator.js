
var _      = require("underscore"),
    fs     = require("fs"),
    evento = require("evento");

function Validator() {

};

Validator.prototype = {

    request: null,


    checkArgs: function()
    {
        if (!this.isArgValid()) {
            throw "no dir argument";
        }

        try {
            this.isArgDir();
        } catch (e) {
            throw this.request.args[0] + " is not a directory";
        }

        return this;
    },

    checkName: function()
    {
        if (_.isEmpty(this.request.name)) {
            throw "name option can not be empty";
        }

        return this;
    },

    checkType: function()
    {
        if (_.isEmpty(this.request.type)) {
            throw 'type option can not be empty';
        }

        if (!this.isTypeValid()) {
            throw this.request.type + ' is not a valid option';
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

    isArgValid: function()
    {
        return _.isArray(this.request.args)
            && this.request.args.length == 1;
    },

    isTypeValid: function()
    {
        return this.request.type === 'php'
            || this.request.type === 'node';
    },

    validate: function()
    {
        try {

            this.checkArgs()
                .checkType()
                .checkName();

            evento.trigger("valid");

        } catch(err) {

            evento.trigger("error");
        }
    }
};

module.exports = new Validator();