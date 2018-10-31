const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.disable("x-powered-by");

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
var basicAuth = require("basic-auth");

var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "test" || creds.pass != "test") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/github", auth);
app.use("/kitty_carousel", auth);

app.use(cookieParser());

app.use(function(req, res, next) {
    if (!req.cookies.hasAcceptedPolicy && req.url != "/cookie") {
        res.cookie("url", req.url);
        res.redirect("/cookie");
    } else {
        next();
    }
});

// app.use("/kitty_carousel", auth);

app.use(express.static("./projects"));

app.get("/cookie", function(req, res) {
    res.send(
        `<form action="/cookie" method="POST">
            Do you accept our cookie policy?
            <input name = 'accepts' type='checkbox'>
            <button>Submit</button>
        </form>`
    );
});

app.post("/cookie", function(req, res) {
    if (req.body.accepts == "on") {
        res.cookie("hasAcceptedPolicy", "yes");
        res.redirect(req.cookies.url);
    }
    res.redirect("/cookie");
});

app.listen(8080, () => console.log(`I'm listening`));
