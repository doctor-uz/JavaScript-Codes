const express = require("express");
const app = express();
const ca = require("chalk-animation");

const { getToken, getTweets, filterTweets } = require("./twitterReq");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    getToken()
        .then(token =>
            Promise.all([
                getTweets(token, "cnn"),
                getTweets(token, "nytimes"),
                getTweets(token, "cnbc")
            ])
        )
        .then(responses => {
            console.log(responses);
            //...res or spread (here is spread) // we can sort the before we filter them, sort by timestamp inside the whole array using created_at
            responses = [...responses[0], ...responses[1], ...responses[2]];
            console.log(
                responses.sort(function(a, b) {
                    // console.log(responses);
                    return new Date(b.created_at) - new Date(a.created_at);
                })
            );
            res.json(filterTweets(responses));
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});
app.listen(8080, () => ca.rainbow("I am listening ..."));
