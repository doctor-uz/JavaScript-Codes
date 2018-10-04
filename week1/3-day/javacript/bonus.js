var totaler = getTotaler();

function getTotaler() {
    var n = 0;
    return function(newNum) {
        n += newNum;
        console.log(n);
    };
}

totaler(1);
totaler(3);
totaler(4);
