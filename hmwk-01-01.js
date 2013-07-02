#!/usr/bin/env node

//#! Task:: Write a "Hello World" node.js program.

var fs = require('fs');
var outfile = "hmwk-01-01.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

