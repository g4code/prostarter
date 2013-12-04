
var should = require("chai").should(),
    _      = require("underscore"),
    filter = require("../../../lib/prostarter/filter");

describe("filter", function(){

    describe("camelCaseName", function(){

        it("should transform dash to camel case", function(){

            filter.request = {name: "clean-code"};
            filter
                .capitalizeName()
                .camelCaseName();
            filter.request.camelCasedName.should.equal("CleanCode");
        });
    });

    describe("capitalize", function(){

        it("should capitalize", function(){

            filter.capitalize("test").should.equal("Test");
        });
    });

    describe("filter", function(){

        it("should resolve path", function(){

            filter.request = {args:["./"],name:"pro"};
            filter.filter();

            filter.request.dir.should.be.a("string");
            __dirname.indexOf("/pro").should.be.above(0);
            _.isUndefined(filter.request.args).should.be['true'];
        });
    });

    describe("namespace", function(){

        it("should set namespace", function(){

            filter.request = {namespace: "test"};
            filter.namespace();
            filter.request.namespace.should.equal("Test");
        });

        it("should set namespace to empty string", function(){

            filter.request = {namespace: undefined};
            filter.namespace();
            filter.request.namespace.should.equal("");
        });
    });
});