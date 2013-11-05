
var validator = require('./prostarter/validator'),
    filter    = require('./prostarter/filter'),
    dir       = require('./prostarter/dir'),
    file      = require('./prostarter/file'),
    evento    = require('evento'),
    _         = require('underscore'),
    informer  = require('informer');

function Prostarter() {

    informer.title("prostarter")
            .titleColor("cyan");

    evento.on("error",      _.bind(informer.error, informer));
    evento.on("success",    _.bind(informer.success, informer));
    evento.on("info",       _.bind(informer.info, informer));

    evento.on("valid",      _.bind(this.filter, this));
    evento.on("filter",     _.bind(this.directory, this));
    evento.on("dirCreated", _.bind(this.file, this));
}

module.exports = Prostarter;

Prostarter.prototype = {

    request: {
        args: null,
        name: null,
        type: null
    },

    directory: function()
    {
        dir.request = this.request;
        dir.create();
    },

    file: function()
    {
        file.request = this.request;
        file.create();
    },

    filter: function()
    {
        filter.request = this.request;
        filter.filter();

        return;
    },

    run: function()
    {
        validator.request = this.request;
        validator.validate();
    },
};