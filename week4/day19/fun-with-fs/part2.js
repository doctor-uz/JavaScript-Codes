const fs = require("fs");

var myPath = __dirname + "/files";

function reading(path) {
    var obj = {};
    var directory = fs.readdirSync(path);
    for (var i = 0; i < directory.length; i++) {
        let newPath = path + "/" + directory[i];
        // console.log(newPath);
        let stats = fs.statSync(newPath);
        if (stats.isDirectory()) {
            obj[directory[i]] = reading(newPath);
        } else {
            obj[directory[i]] = stats.size;
        }
    }
    return obj;
}
fs.writeFileSync(
    __dirname + "/files.json",
    JSON.stringify(reading(myPath), null, 4)
);
