
var os = require("os");

module.exports = [
    '{',
    '  "name": "{{ project-name }}",',
    '  "description": "{{ project-name }} php library",',
    '  "keywords": [],',
    '  "license": "MIT",',
    '  "authors": [],',
    '  "require-dev": {',
    '    "phpunit/phpunit": "3.7.*"',
    '  },',
    '  "require": {',
    '  }',
    '}'
].join(os.EOL);