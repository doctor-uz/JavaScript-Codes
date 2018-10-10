var initialArr = [1, s, 3, 4];

console.log("This is initial array: ", initialArr);

function arr(initialArr) {
    var b = initialArr.slice();
    return b.sort(function(a, b) {
        return b - a;
    });
}

console.log("This is reverse sorted array: ", arr(initialArr));
console.log("Lets check original array: ", initialArr);
