function each(x, callback) {
    if (typeof x === "object") {
        for (var prop in x) {
            callback(x[prop], prop);
        }
    } else if (Array.isArray(x)) {
        x.forEach(function(val, idx) {
            callback(val, idx);
        });
    }
}

// test for objects - logs prop and then value
console.log(
    each(
        {
            a: 1,
            b: 2
        },
        function(val, name) {
            console.log("The value of " + name + " is " + val);
        }
    )
);

// test for arrays - logs index and then value
each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
});
