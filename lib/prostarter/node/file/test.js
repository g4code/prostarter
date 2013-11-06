
var os = require("os");

module.exports = [
    '',
    'var should = require("chai").should(),',
    '    suite = require("../suite"),',
    '    {{ project-name }} = require(suite.path("{{ project-name }}"));',
    '',
    'describe("{{ project-name }}", function(){',
    '',
    '    beforeEach(function() {',
    '',
    '    });',
    '',
    '    describe("", function() {',
    '',
    '        it("", function() {',
    '',
    '        });',
    '    });',
    '',
    '});',
].join(os.EOL);