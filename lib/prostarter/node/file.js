
module.exports = [
    {name: "bin/{{ project-name }}.js",           data: ""},
    {name: "lib/{{ project-name }}.js",           data: ""},
    {name: "test/lib/{{ project-name }}.test.js", data: ""},
    {name: ".gitignore",                          data: require("./file/gitignore")},
    {name: "LICENSE",                             data: require("./file/license")},
    {name: "Makefile",                            data: require("./file/makefile")},
    {name: "package.json",                        data: require("./file/package")},
    {name: "README.md",                           data: require("./file/readme")}
];