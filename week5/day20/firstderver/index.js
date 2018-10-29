const http = require("http");
const fs = require("fs");

const server = http.createServer(function(request, response) {
    request.on("error", function(err) {
        console.log("error in REQUEST: ", err);
    });

    response.on("error", function(err) {
        console.log("error in RESPONSE: ", err);
    });

    //For each request, log the method, url, and request headers to the console
    console.log("This is METHOD header of request: ", request.method);
    console.log("This is URL header of request: ", request.url);
    console.log("This is HEADERS header of request: ", request.headers);

    //Append file =========================================
    let date = new Date();
    let info = `Date: ${date}\t Method: ${request.method}\t URL: ${
        request.url
    }\t user-agent: ${request.headers["user-agent"]}\n`;

    fs.appendFile("requests.txt", info, function(err) {
        if (err) {
            console.log(err);
        }
    });
    ///

    if (request.method == "GET" || request.method == "HEAD") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
    }

    if (request.method == "HEAD") {
        response.end();
    }

    if (request.method == "GET") {
        response.end(`
            <!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!
            </html>
            `);
    }

    // let body = "";
    if (request.method == "POST") {
        let body = "";
        request.on("data", function(chunk) {
            body += chunk;
        });
        request.on("end", function() {
            console.log("Body is: ", body); //logs the entire request body
        });

        response.setHeader("Location", "/");
        response.statusCode = 302;
        response.end(`<h1>This is H1</h1>`);

        // request.on("end", function() {
        // });
    }

    if (
        request.method != "GET" &&
        request.method != "HEAD" &&
        request.method != "POST"
    ) {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080, function() {
    console.log("I am listining you ....");
});
