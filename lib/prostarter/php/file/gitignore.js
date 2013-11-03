
var os = require("os");

module.exports = [
    '*.seed',
    '*.log',
    '*.csv',
    '*.dat',
    '*.out',
    '*.pid',
    '*.gz',
    '',
    'composer.phar',
    'vendor',
    '',
    '.buildpath',
    '.project',
    '.settings'
].join(os.EOL);