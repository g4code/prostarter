
var _ = require("underscore");

function Validator()
{

};

Validator.prototype = {

    request: null,


    checkArgs: function()
    {
        if (_.isArray(this.request.args)) {
            return this;
        }
    },

    setRequest: function(request)
    {
        this.request = request;

        return this;
    },

    validate: function()
    {
       console.log(this.request);
    }
};

module.exports = new Validator();