const http = require("http");
const fs = require("fs");
//path is for working with strings that are the paths to our harddrive.
const path = require("path");
//path has a method name path.parse('/users/alejandrajaramillo/Desktop/catnip-code/WK5/portfolio/projects')
//has another method if it is a file path.extname

const myModule = require("./test2.js");
var html = myModule.listdir();

http.createServer((req, res) => {
    if (req.method != "GET") {
        res.statusCode = 405;
        return res.end();
    }
    //console.log(req.url);

    const item = __dirname + "/projects" + req.url;
    const normalized = path.normalize(item);

    if (!normalized.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        return res.end();
    }

    fs.stat(item, function(err, stats) {
        if (err) {
            res.statusCode = 404;
            return res.end();
        }

        if (req.url === "/") {
            return res.end(html);
        }
        //console.log(stats.isFile());
        if (stats.isFile()) {
            //content-type is very important we should have if else statement to determine this for every file/
            // if (extenstion.html ) maybe I can use
            function getContentTypeFromExtension(ext) {
                if (ext === ".html") {
                    return "text.html";
                } else if (ext == ".css") {
                    return "text/css";
                } else if (ext == ".js") {
                    return "text/javascript";
                } else if (ext == ".json") {
                    return "application/json";
                } else if (ext == ".gif") {
                    return "image/gif";
                } else if (ext == ".jpg") {
                    return "image/jpeg";
                } else if (ext == ".png") {
                    return "image/png";
                } else if (ext == ".svg") {
                    return "image/svg+xml";
                }
            }
            const contentType = getContentTypeFromExtension(
                path.extname(req.url)
            );
            res.setHeader("Content-type", contentType);

            //we have to send a file (we use one of these streams: readStreams and writeStreams)
            //stream is very efficient and fast, when we send a stream we take createReadStream and pipe it into a writeStream
            const stream = fs.createReadStream(item);
            stream.pipe(res);
            stream.on("error", () => {
                res.statusCode = 500;
                return res.end();
            });
            //if it is a directory:
        } else if (req.url.endsWith("/")) {
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 302;
            const stream2 = fs.createReadStream(item + "index.html");
            stream2.pipe(res);
            stream2.on("error", () => {
                res.statusCode = 500;
                return res.end();
            });
        } else {
            res.setHeader("location", req.url + "/");
            res.statusCode = 302;
            return res.end();
        }
    });
    //PART2
    //end of part2
}).listen(8080, () => console.log("I am listening"));
