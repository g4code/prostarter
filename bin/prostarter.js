#!/usr/bin/env node

var Prostarter = require("../lib/prostarter"),
program        = require("commander"),
packageData    = require(__dirname + "/../package.json");

program.version(packageData.version)
       .usage("[options] [dir]")
       .option('-t, --type <n>', 'project type (node || php)')
       .option('-n, --name <n>', 'project name')
       .option('-N, --namespace <n>', 'php top level namespace')
       .parse(process.argv);

var prostarter = new Prostarter();
prostarter.request.args      = program.args;
prostarter.request.type      = program.type;
prostarter.request.name      = program.name;
prostarter.request.namespace = program.namespace;
prostarter.run();
