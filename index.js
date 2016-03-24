#!/usr/bin/env node
var program = require("commander");
var request = require("superagent");

// api info: https://developer.github.com/v3/repos/
var apiURL = "https://api.github.com" + "/user/repos";

program
    .action(function(){
        var args = Array.prototype.slice.call(arguments);
        var name = args.slice(0, args.length-1).join(' ');
        console.log('what was name: ', name);
    })
    .parse(process.argv);
