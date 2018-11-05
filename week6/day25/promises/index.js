var fs = require("fs");
var util = require("util");

var readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
var myPath = __dirname + "/files";

readdir(myPath)
    .then(function(files) {
        var newArray = files.map(item => {
            let myPath2 = myPath + "/" + item;
            return stat(myPath2).then(stats => {
                if (stats.isDirectory()) {
                    return console.log(item, " is a directory");
                } else {
                    return console.log(item, " is not a directory");
                }
            });
        });
        return Promise.all(newArray);
    })
    .then(() => {
        console.log("done!!!");
    })
    .catch(err => {
        console.log("ERROR in stat:", err);
        process.exit();
    });
