function getLessThanZero(arr) {
    return arr.filter(function(n) {
        if (n <= 0) return n;
    });
}

console.log(getLessThanZero([1, -2, 3, -4, -5, 6, 7]));
