const fs = require("fs");
var myPath = __dirname + "/files";

function fn(myPath) {
    fs.readdir(myPath, (err, files) => {
        if (err) {
            console.log("ERROR in readdir:", err);
            process.exit();
        }
        console.log(myPath + "/" + files);

        for (let i = 0; i < files.length; i++) {
            let myPath2 = myPath + "/" + files[i];

            fs.stat(myPath2, (err, stats) => {
                if (err) {
                    console.log("ERROR in stat:", err);
                    process.exit();
                }
                if (stats.isDirectory()) {
                    fn(myPath2);
                }
            });
        }
    });
}

fn(myPath);
