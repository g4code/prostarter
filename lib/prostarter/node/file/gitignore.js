
var os = require("os");

module.exports = [
    'lib-cov',
    '*.seed',
    '*.log',
    '*.csv',
    '*.dat',
    '*.out',
    '*.pid',
    '*.gz',
    '',
    'pids',
    'logs',
    'results',
    '',
    'npm-debug.log',
    'node_modules',
    '',
    '.buildpath',
    '.project',
    '.settings'
].join(os.EOL);