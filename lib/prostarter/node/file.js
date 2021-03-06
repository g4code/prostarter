
module.exports = [
    {name: "bin/{{ project-name }}.js",           data: require("./file/bin")},
    {name: "lib/{{ project-name }}.js",           data: ""},
    {name: "test/lib/{{ project-name }}.test.js", data: require("./file/test")},
    {name: "test/suite.js",                       data: require("./file/suite")},
    {name: ".gitignore",                          data: require("./file/gitignore")},
    {name: "LICENSE",                             data: require("../common/file/license")},
    {name: "Makefile",                            data: require("./file/makefile")},
    {name: "package.json",                        data: require("./file/package")},
    {name: "README.md",                           data: require("./file/readme")}
];