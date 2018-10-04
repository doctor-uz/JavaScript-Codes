function num(n) {
    if (n <= 0 || isNaN(n)) {
        console.log("ERROR");
    } else if (n >= 1000000) {
        console.log(n);
    } else {
        do {
            n = n * 10;
        } while (n <= 1000000);
        console.log(n);
    }
}
num(-1);
