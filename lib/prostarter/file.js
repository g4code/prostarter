
var fs      = require("fs"),
    util    = require("util"),
    evento  = require("evento"),
    _       = require("underscore"),
    FsSuper = require("./fs-super");

function File()
{

};

util.inherits(File, FsSuper);

File.prototype.create = function()
{
    _.each(this.getNamesFor("file"), _.bind(this.writeFile, this));

    evento.trigger("fileCreated");
};

File.prototype.writeFile = function(fileMeta)
{
    try {
        fs.writeFileSync(this.getFullPath(this.parse(fileMeta.name)), this.parse(fileMeta.data));
        evento.trigger("success", "File "+this.request.name+"/"+this.parse(fileMeta.name)+" created.");
    } catch(err) {
        evento.trigger("error", err);
    }
};

module.exports = new File();