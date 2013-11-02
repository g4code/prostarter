
var should = require("chai").should(),
    _      = require("underscore"),
    dir    = require("../../../lib/prostarter/dir");

describe("dir", function(){

    describe("getFullPath", function(){

        it("should should create a path", function(){

            dir.request = {dir: "."};
            dir.getFullPath("dir").should.be.equal("./dir");
        });
    });
});