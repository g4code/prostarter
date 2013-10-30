
var validator = require('./prostarter/validator'),
    filter    = require('./prostarter/filter');

function Prostarter() {

}

module.exports = Prostarter;

Prostarter.prototype = {

    request: {
        args: null,
        name: null,
        type: null
    },

    filter: function()
    {
        filter.request = this.request;
        filter.filter();
    },

    init: function()
    {
        this.validate()
            .filter();

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