// First option
function waitThenRun() {
    setTimeout(function() {
        console.log("Hello!");
    }, 1500);
}

waitThenRun();

// Second option
function waitThenRun2(fn) {
    setTimeout(fn, 1500);
}

function fn() {
    console.log("Good bye!!");
}

waitThenRun2(fn);
