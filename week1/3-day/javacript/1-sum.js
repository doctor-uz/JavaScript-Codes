function sum() {
    var b = 0;
    for (var i = 0; i < arguments.length; i++) {
        b = b + arguments[i];
    }
    console.log(b);
}

sum(1, 2, 3);
