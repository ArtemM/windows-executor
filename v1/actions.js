/**
 * Establishing the routes / API's for this server
 */

var App = require("../core");
var errorHandling = require("./errorHandling");
var tokens = require("../tokens");
var config = require("../config").v1;
var sleepMode = require('sleep-mode');

module.exports = {
    sleep:function() {
        console.log("Trying to sleep");
        sleepMode(function (err, stderr, stdout) {
            if (!err && !stderr) {
                console.log(stdout);
            }
        });
    }
};