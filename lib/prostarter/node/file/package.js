
var os = require("os");

module.exports = [
    '{',
    '  "name": "{{ project-name }}",',
    '  "version": "0.0.1",',
    '  "description": "{{ project-name }} node.js library",',
    '  "main": "./lib/{{ project-name }}.js",',
    '  "directories": {',
    '    "test": "test"',
    '  },',
    '  "scripts": {',
    '    "test": "make test"',
    '  },',
    '  "repository": {',
    '    "type": "git",',
    '    "url": "git://github.com/g4code/{{ project-name }}"',
    '  },',
    '  "keywords": [',
    '    "{{ project-name }}"',
    '  ],',
    '  "author": "Drasko Gomboc <drasko.gomboc@gmail.com>",',
    '  "license": "MIT",',
    '  "bugs": {',
    '    "url": "https://github.com/g4code/{{ project-name }}/issues"',
    '  },',
    '  "devDependencies": {',
    '    "mocha": "*",',
    '    "chai": "*"',
    '  },',
    '  "dependencies": {',
    '    "evento": "*",',
    '    "underscore": "*"',
    '  },',
    '  "bin": {',
    '    "{{ project-name }}": "./bin/{{ project-name }}.js"',
    '  }',
    '}'
].join(os.EOL);