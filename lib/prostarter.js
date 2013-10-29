
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
        try {

            validator.setRequest(this.request)
                     .validate();

        } catch (err) {

            console.log(err);
        }
    }
};