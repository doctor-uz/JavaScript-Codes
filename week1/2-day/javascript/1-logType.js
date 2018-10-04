function logType(val) {
    if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (val === null) {
        console.log("null!");
    } else if (Number.isNaN(val)) {
        console.log("not a number!");
    } else if (typeof val == "number") {
        console.log("number!");
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else if (Array.isArray(val)) {
        console.log("array!");
    } else if (typeof val == "object") {
        console.log("object!");
    } else {
        console.log("I have no idea!");
    }
}

logType(function() {});
