
var should = require("chai").should(),
    filter = require("../../../lib/prostarter/filter");

describe("filter", function(){

    describe("filter", function(){

        it("should resolve path", function(){

            filter.request = {args:["./"]};
            filter.filter();

            filter.request.dir.should.be.a("string");
            __dirname.indexOf(filter.request.dir).should.equal(0);
        });
    });
});