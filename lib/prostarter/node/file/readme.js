
var os = require("os");

module.exports = [
    '{{ project-name }}',
    '======',
    '',
    '> {{ project-name }} - [nodejs](http://nodejs.org) library',
    '',
    '## Install',
    '',
    '    $ npm install {{ project-name }}',
    '',
    '## Usage',
    '',
    '## Development',
    '',
    '### Install dependencies',
    '',
    '    $ make install',
    '',
    '### Run tests',
    '',
    '    $ make test',
    '',
    '## License',
    '',
    '(The MIT License)',
    'see LICENSE file for details...'
].join(os.EOL);