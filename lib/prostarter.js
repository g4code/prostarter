
var validator = require('./prostarter/validator'),
    filter    = require('./prostarter/filter'),
    directory = require('./prostarter/directory');

function Prostarter() {

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
        directory.request = this.request;
        directory.create();
    },

    filter: function()
    {
        filter.request = this.request;
        filter.filter();

        return;
    },

    init: function()
    {
        this.validate()
            .filter()
            .directory();

        console.log(this.request);
    },

    validate: function()
    {
        try {

            validator.request = this.request;
            validator.validate();

        } catch (err) {

            console.log(err);
        }

        return this;
    }
};