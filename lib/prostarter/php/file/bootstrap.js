
var os = require("os");

module.exports = [
    '<?php',
    '',
    'return require(__DIR__.\'/../vendor/autoload.php\');',
].join(os.EOL);