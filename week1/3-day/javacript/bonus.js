var totaler = getTotaler();

function getTotaler() {
    var n = 0; //this is important
    return function(newNum) {
        n += newNum;
        return n;
    };
}

console.log(totaler(1));
console.log(totaler(2));
console.log(totaler(3));
