
var should    = require("chai").should(),
    validator = require("../../../lib/prostarter/validator");

describe("validator", function(){

    describe("checkArgs", function(){

        it("should throw exception if args are empty", function(){

            validator.request = {args:[]};

            try {
                validator.checkArgs();
            } catch (err) {
                err.should.be.a("string");
            }
        });

        it("should throw exception if arg is not dir", function(){

            validator.request = {args:["./no-dir"]};

            try {
                validator.checkArgs();
            } catch (err) {
                err.should.be.a("string");
            }
        });

        it("should return validator object if arg is dir", function(){

            validator.request = {args:["../"]};

            validator.checkArgs().should.be.an("object");
        });
    });

    describe("checkName", function(){

        it("should throw exception if name is empty", function(){

            validator.request = {name:undefined};

            try {
                validator.checkName();
            } catch (err) {
                err.should.be.a("string");
            }
        });

        it("should return validator object if name is valid", function(){

            validator.request = {name:"aaa"};

            validator.checkName().should.be.an("object");
        });
    });

    describe("checkType", function(){

        it("should throw exception if type is empty", function(){

            validator.request = {type:undefined};

            try {
                validator.checkType();
            } catch (err) {
                err.should.be.a("string");
            }
        });

        it("should throw exception if type is not valid", function(){

            validator.request = {type:"aaa"};

            try {
                validator.checkType();
            } catch (err) {
                err.should.be.a("string");
            }
        });

        it("should return validator object if type is valid", function(){

            validator.request = {type:"php"};
            validator.checkType().should.be.an("object");

            validator.request = {type:"node"};
            validator.checkType().should.be.an("object");
        });
    });

    describe("isArgValid", function(){

        it("should return true if args are not empty", function(){

            validator.request = {args:["./"]};
            validator.isArgValid().should.be.true;
        });

        it("should return false args are empty", function(){

            validator.request = {args:[]};
            validator.isArgValid().should.be.false;
        });
    });

    describe("isTypeValid", function(){

        it("should return true if type is valid", function(){

            validator.request = {type:"php"};
            validator.isTypeValid().should.be.true;

            validator.request = {type:"node"};
            validator.isTypeValid().should.be.true;
        });

        it("should return false if type is not valid", function(){

            validator.request = {type:"aaa"};
            validator.isTypeValid().should.be.false;
        });
    });
});
