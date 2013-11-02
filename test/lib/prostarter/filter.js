
var should = require("chai").should(),
    _      = require("underscore"),
    filter = require("../../../lib/prostarter/filter");

describe("filter", function(){

    describe("filter", function(){

        it("should resolve path", function(){

            filter.request = {args:["./"],name:"pro"};
            filter.filter();

            filter.request.dir.should.be.a("string");
            __dirname.indexOf("/pro").should.be.above(0);
            _.isUndefined(filter.request.args).should.be['true'];
        });
    });
});