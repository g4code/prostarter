
function Prostarter() {

}

module.exports = Prostarter;

Prostarter.prototype = {

    args: null,

    name: null,

    type: null,


    init: function()
    {
        console.log(this.args, this.name, this.type);
    }

};