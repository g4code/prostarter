
var validator = require('./prostarter/validator');

function Prostarter() {

}

module.exports = Prostarter;

Prostarter.prototype = {

    request: {
        args: null,
        name: null,
        type: null
    },

    init: function()
    {
        this.validate();
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