
var os = require("os");

module.exports = [
    '#!/usr/bin/env node',
    '',
    'var packageData = require(__dirname + "/../package.json");',
].join(os.EOL);