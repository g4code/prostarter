
var fs      = require("fs"),
    util    = require("util"),
    evento  = require("evento"),
    _       = require("underscore"),
    FsSuper = require("./fs-super");

function Dir()
{

};

util.inherits(Dir, FsSuper);

Dir.prototype.dirPath = null;

Dir.prototype.create = function()
{
    this.mkdir('');

    _.each(this.getNamesFor("dir"), _.bind(this.mkdir, this));

    evento.trigger("dirCreated");
};

Dir.prototype.doMkdir = function(dirName)
{
    try {
        fs.mkdirSync(this.dirPath);
        evento.trigger("success", "Directory created: "+this.dirPath);
    } catch(err) {
        evento.trigger("error", err);
    }
};

Dir.prototype.mkdir = function(dirName)
{
    this.dirPath = this.getFullPath(this.parse(dirName));

    this.doesPathExists()
        ? evento.trigger("warning", "Directory exists: "+this.dirPath)
        : this.doMkdir();
};

Dir.prototype.doesPathExists = function()
{
    return fs.existsSync(this.dirPath);
};

module.exports = new Dir();