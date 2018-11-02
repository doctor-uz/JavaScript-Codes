const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");
var basicAuth = require("basic-auth");
const ca = require("chalk-animation");

app.disable("x-powered-by");

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "dilshod" || creds.pass != "test") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/projects/github", auth);
app.use("/projects/kitty_carousel", auth);

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

//do not touch this code
var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");
//do not touch this code

// app.use(express.static('./projects'));
//make sure i do it here and only once
app.use(express.static("./public"));

var folders = fs.readdirSync(__dirname + "/public/projects");

app.get("/projects", (req, res) => {
    res.render("home", {
        layout: "main",
        project: folders
    });
});

//we will add this for each project description
app.get("/projects/:projectName/description", (req, res) => {
    // console.log("req params:", req.params);
    //this gives me just the name of the animal we wrote
    console.log("req params:", req.params.projectName);
    var description = require("./public/projects/" +
        req.params.projectName +
        "/description.json");
    // console.log(data);
    res.render("viewDescript", {
        layout: "main",
        viewDescript: description,
        dir: req.params.projectName
    });
});

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

app.listen(8080, () => ca.rainbow("I am listening ..."));
