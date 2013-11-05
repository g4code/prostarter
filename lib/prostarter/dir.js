
var fs      = require("fs"),
    util    = require("util"),
    evento  = require("evento"),
    _       = require("underscore"),
    FsSuper = require("./fs-super");

function Dir()
{

};

util.inherits(Dir, FsSuper);

Dir.prototype.create = function()
{
    this.mkdir('');

    _.each(this.getNamesFor("dir"), _.bind(this.mkdir, this));

    evento.trigger("dirCreated");
};

Dir.prototype.mkdir = function(dirName)
{
    try {
        fs.mkdirSync(this.getFullPath(this.parse(dirName)));
        evento.trigger("success", "Directory "+this.request.name+"/"+this.parse(dirName)+" created.");
    } catch(err) {
        evento.trigger("error", err);
    }
};

module.exports = new Dir();