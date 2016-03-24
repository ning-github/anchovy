#!/usr/bin/env node --harmony

var program = require("commander");
var co = require("co");
var prompt = require("co-prompt");
var request = require("superagent");

// api endpoint to create new GitHub repo -- api info: https://developer.github.com/v3/repos/
var apiURL = "https://api.github.com" + "/user/repos";

program
    .action(function(){
        var args = Array.prototype.slice.call(arguments);
        var name = args.slice(0, args.length-1).join(" ");
        co(function* (){
            var username = yield prompt("Enter GitHub username: ");
            var password = yield prompt.password("Enter GitHub password: ");
            request
                .post(apiURL)
                .auth(username, password)
                .send({name: name})
                .set("Accept", "application/json")
                .end(function (err, res){
                    console.log("Created repo at: ", res.body.clone_url);
                });
        });
    })
    .parse(process.argv);
