
var fs     = require("fs"),
    evento = require("evento"),
    _      = require("underscore");

function Dir()
{

};

Dir.prototype = {

    request: null,

    create: function()
    {
        this.mkdir('');

        _.each(this.getDirNames(), _.bind(this.mkdir, this));

        evento.trigger("dirsCreated");
    },

    getDirNames: function()
    {
        return require("./" + this.request.type + "/" + "dir");
    },

    getFullPath: function(dirName)
    {
        return this.request.dir + "/" + dirName;
    },

    mkdir: function(dirName)
    {
        try {
            fs.mkdirSync(this.getFullPath(dirName));
        } catch(err) {
            evento.trigger("error", err);
        }
    }
};

module.exports = new Dir();