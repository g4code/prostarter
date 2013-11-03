
module.exports = [
    {name: "bin/{{ project-name }}.php", data: require("./file/bin")},
    {name: "src/bootstrap.php",          data: require("./file/bootstrap")},
    {name: "test/bootstrap.php",         data: ""},
    {name: "test/phpunit.xml",           data: ""},
    {name: ".gitignore",                 data: require("./file/gitignore")},
    {name: "LICENSE",                    data: require("../common/file/license")},
    {name: "Makefile",                   data: require("./file/makefile")},
    {name: "conposer.json",              data: require("./file/composer")},
    {name: "README.md",                  data: require("./file/readme")}
];