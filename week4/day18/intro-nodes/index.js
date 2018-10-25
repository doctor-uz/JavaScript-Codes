var proc = process.argv;
var querystring = require("querystring");
// var query = querystring.parse(query);

//
var url = require("url");
var parseUrl = url.parse(proc[2]);
var query = querystring.parse(parseUrl.query);

console.log(query.a);
console.log(query.b);
// console.log(parseUrl);

console.log("The protocol is: ", parseUrl.protocol);
console.log("The host is: ", parseUrl.host);
console.log("The hostname is: ", parseUrl.hostname);
console.log("The port is: ", parseUrl.port);
console.log("The pathname is: ", parseUrl.pathname);
console.log("The query is: ", parseUrl.query);

for (var key in query) {
    console.log("The value of the " + key + " parameter is ", query[key]);
}

// const parseUrl = url.parse("http://127.0.0.1:8080/test?a=100&b=200");
//
// console.log(parseUrl.pathname);

//import fn FROM script.js
//REQUIORE means import

// var myModule = require("./script.js");
//
// console.log(myModule.fn());
//
// const http = require("http");
// //
// // const punycode = require("punycode");
// // console.log(punycode);
//
// //npm packeges must be installed before we can import them
// // we install npn packages by running
// //npm install nameOfPackeg
// //in the command line
//
// const chalkAnimation = require("chalk-animation");

// console.log(process.argv); // is an array. Terminalda bulayotgan hodisalarni kursatib turadi
//
