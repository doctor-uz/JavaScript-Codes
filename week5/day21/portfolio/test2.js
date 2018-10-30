const fs = require("fs");
let files = fs.readdirSync("./projects/");
let html = "";

module.exports.listdir = () => {
    files.forEach(file => {
        html += `<a href='/${file}/'>${file}</a><br><br>`;
    });
    return html;
};
