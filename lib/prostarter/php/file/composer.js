
var os = require("os");

module.exports = [
    '{',
    '  "name": "g4code/{{ project-name }}",',
    '  "description": "{{ project-name }} php library",',
    '  "authors": [',
    '    {',
    '      "name": "Drasko Gomboc",',
    '      "email": "drasko.gomboc@gmail.com>"',
    '    }',
    '  ],',
    '  "require-dev": {',
    '    "phpunit/phpunit": "3.7.*"',
    '  },',
    '  "require": {',
    '  }',
    '}'
].join(os.EOL);