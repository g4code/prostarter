
module.exports = [
    {name: "bin/{{ project-name }}.php", data: require("./file/bin")},
    {name: "src/bootstrap.php",          data: require("./file/bootstrap")},
    {name: "test/bootstrap.php",         data: require("./file/bootstrap-test")},
    {name: "test/phpunit.xml",           data: require("./file/phpunit")},
    {name: ".gitignore",                 data: require("./file/gitignore")},
    {name: "LICENSE",                    data: require("../common/file/license")},
    {name: "Makefile",                   data: require("./file/makefile")},
    {name: "composer.json",              data: require("./file/composer")},
    {name: "README.md",                  data: require("./file/readme")}
];