const https = require("https");
const secrets = require("./secrets.json");

// -------------- we will write this one together!
module.exports.getToken = function getToken(cb) {
    var concatenatedCreds = secrets.consumerKey + ":" + secrets.consumerSecret;
    var encodedCreds = new Buffer(concatenatedCreds).toString("base64");

    let options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: "Basic " + encodedCreds,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };

    let callback = resp => {
        // will run if something goes wrong
        if (resp.statusCode != 200) {
            cb(resp.statusCode);
            return;
        }

        // will run if things go according to plan!
        let body = "";

        resp.on("data", chunk => {
            body += chunk;
        });

        // everything went well!!!!!!!
        resp.on("end", () => {
            let parsedBody = JSON.parse(body);
            let bearerToken = parsedBody.access_token;
            cb(null, bearerToken);
        });
    };

    // req is the request we're sending to twitter
    const req = https.request(options, callback);

    // req.write = writing a body to the request
    req.write("grant_type=client_credentials");

    // req.end sends the request to twitter
    req.end();
};

// --------------- you will have to write these!

module.exports.getTweets = function getTweets(bToken, cb) {
    console.log("bToken: ", bToken);
    // var concatenatedCreds = secrets.consumerKey + ":" + secrets.consumerSecret;
    // var encodedCreds = new Buffer(concatenatedCreds).toString("base64");

    let options = {
        method: "GET",
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?count=15&screen_name=CNN",
        headers: {
            Authorization: "Bearer " + bToken
        }
    };

    let callback = resp => {
        // will run if something goes wrong
        if (resp.statusCode != 200) {
            cb(resp.statusCode);
            return;
        }

        // will run if things go according to plan!
        let body = "";

        resp.on("data", chunk => {
            body += chunk;
        });

        // everything went well!!!!!!!
        resp.on("end", () => {
            let parsedBody = JSON.parse(body);
            cb(null, parsedBody);
        });
    };

    // req is the request we're sending to twitter
    const req = https.request(options, callback);

    // req.write = writing a body to the request
    // req.write("grant_type=client_credentials");

    // req.end sends the request to twitter
    req.end();

    // will go to Twitter API to get tweets
    // from news source of your choice
};

module.exports.filterTweets = function filterTweets(tweets) {
    // will read through response from Twitter
    // and cut out all the junk we don't need
    // from that response
    var filteredTweets = [];

    for (var i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length === 1) {
            let myObj = {};
            myObj.content = tweets[i].text.replace(
                /(?:https?|ftp):\/\/[\n\S]+/g,
                ""
            );
            myObj.url = tweets[i].entities.urls[0].url;
            filteredTweets.push(myObj);
        } else {
            continue;
        }
    }
    console.log(filteredTweets);
    return filteredTweets;
};
