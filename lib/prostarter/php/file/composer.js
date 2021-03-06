
var os = require("os");

module.exports = [
    '{',
    '  "name": "{{ project-name }}",',
    '  "description": "{{ project-name }} php library",',
    '  "keywords": [],',
    '  "license": "MIT",',
    '  "authors": [],',
    '  "autoload": {',
    '    "psr-0": {"{{ Project-camelCase }}\\\\": "src/"}',
    '  },',
    '  "require-dev": {',
    '    "phpunit/phpunit": "3.7.*"',
    '  },',
    '  "require": {',
    '  }',
    '}'
].join(os.EOL);