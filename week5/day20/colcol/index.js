//Echo Server Example
const http = require("http");
const chalk = require("chalk");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    req.on("error", function(err) {
        console.log("error in REQUEST: ", err);
    });

    res.on("error", function(err) {
        console.log("error in RESPONSE: ", err);
    });

    if (req.method == "GET") {
        res.end(`
            <!doctype html>
    <html>
    <title>Colors</title>
    <form method="POST">
      <input type="text" name="text">
      <select name="color">
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="gray">gray</option>
        <option value="magenta">magenta</option>
        <option value="cyan">cyan</option>
      </select>
      <button type="submit">Go</button>
    </form>
    </html>
            `);
    } else if (req.method === "POST") {
        let body = [];

        req.on("data", function(chunk) {
            body += chunk;
        });
        req.on("end", function() {
            let parsed = querystring.parse(body);
            res.statusCode = 200;

            console.log(chalk[parsed.color](parsed.text));

            res.end(
                `<!doctype html>
                <html>
                <title>${parsed.text}</title>
                <a href="/" style="color:${parsed.color}"><p>${
                    parsed.text
                }</p></a>
                </html>`
            );
        });
    }
});

server.listen(8080, () => console.log("I am littening ... "));
