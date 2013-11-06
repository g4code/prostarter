
var os = require("os");

module.exports = [
    '#!/usr/bin/env php',
    '<?php',
    '',
    'require __DIR__.\'/../vendor/autoload.php\';'
].join(os.EOL);