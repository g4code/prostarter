
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
        return this.request.dir + "/" + name;
    },

    parse: function(data)
    {
        return data.replace(/\{\{ project-name \}\}/g, this.request.name)
                   .replace(/\{\{ Project-name \}\}/g, this.request.ucfName);
    }
};

module.exports = FsBase;