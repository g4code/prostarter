
var os = require("os");

module.exports = [
    '#!/usr/bin/env php',
    '<?php',
    '',
    '$loader = require __DIR__.\'/../src/bootstrap.php\';',
].join(os.EOL);