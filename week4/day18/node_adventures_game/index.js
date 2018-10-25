const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var story = {
    q: "Welcome to The Land Of Wizards! Would you like to play? [yes/no]",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? [left/right]",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations! "
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};
var test = process.env.LOGNAME;
console.log("Hi " + test + "!");

function ask(story) {
    // console.log();
    rl.question(story.q, function(answer) {
        if (typeof story.answers[answer] == "string") {
            console.log(story.answers[answer]);
            rl.close();
        } else if (typeof story.answers[answer] == "object") {
            ask(story.answers[answer]);
        } else {
            console.log("Wrong answer!");
            ask(story);
        }
    });
}

ask(story);
