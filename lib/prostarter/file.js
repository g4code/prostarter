
var fs     = require("fs"),
    evento = require("evento"),
    _      = require("underscore");

function File()
{

};

File.prototype = {

    request: null,

    create: function()
    {
        _.each(this.getFileNames(), _.bind(this.writeFile, this));

        evento.trigger("fileCreated");
    },

    getFileNames: function()
    {
        return require("./" + this.request.type + "/" + "file");
    },

    getFullPath: function(name)
    {
        return this.request.dir + "/" + name;
    },

    writeFile: function(fileMeta)
    {
        try {
            fs.writeFileSync(this.getFullPath(fileMeta.name), fileMeta.data);
        } catch(err) {
            evento.trigger("error", err);
        }
    }
};

module.exports = new File();