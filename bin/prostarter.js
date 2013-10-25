#!/usr/bin/env node

var Prostarter = require("../lib/prostarter"),
program        = require("commander"),
packageData    = require(__dirname + "/../package.json");

program.version(packageData.version)
       .usage("[options] [dir]")
       .option('-t, --type <n>', 'project type (node || php)')
       .option('-n, --name <n>', 'project name')
       .parse(process.argv);

var prostarter = new Prostarter();
prostarter.args = program.args;
prostarter.type = program.type;
prostarter.name = program.name;
prostarter.init();
