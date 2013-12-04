
var path = require("path");

function FsBase()
{

};

FsBase.prototype = {

    request: null,


    getNamesFor: function(fsType)
    {
        return require("./" + this.request.type + "/" + fsType);
    },

    getFullPath: function(name)
    {
        return path.resolve(this.request.dir + "/" + name);
    },

    parse: function(data)
    {
        return data.replace(/\{\{ project-name \}\}/g, this.request.name)
                   .replace(/\{\{ Project-name \}\}/g, this.request.capitalizedName)
                   .replace(/\{\{ Project-namespace \}\}/g, this.request.namespace);
    }
};

module.exports = FsBase;