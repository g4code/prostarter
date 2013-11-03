
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

    parse: function(data)
    {
        return data.replace(/\{\{ project-name \}\}/g, this.request.name);;
    },

    writeFile: function(fileMeta)
    {
        try {
            fs.writeFileSync(this.getFullPath(this.parse(fileMeta.name)), this.parse(fileMeta.data));
        } catch(err) {
            evento.trigger("error", err);
        }
    }
};

module.exports = new File();