
var os = require("os");

module.exports = [
    '',
    'var path = require("path");',
    '',
    'var suite = {',
    '',
    '    mock: function(mockName)',
    '    {',
    '        return path.resolve(__dirname + "/mock/" + mockName);',
    '    },',
    '',
    '    path: function(moduleName)',
    '    {',
    '        return path.resolve(__dirname + "/../lib/" + moduleName);',
    '    }',
    '};',
    '',
    'module.exports = suite;'
].join(os.EOL);