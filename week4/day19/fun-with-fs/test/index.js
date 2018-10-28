const fs = require("fs");

console.log("dir name: ", __dirname); /// rootdan boshlab to fayl turgan joygacha yulni kursatadi pwd ga uhshagan, node versiyasi

//fs.writeFile
const message = "catnip is awesome";

//(fayl yuli + faylnomi, faylni ichidagi kontent)
fs.writeFile(__dirname + "/catnip.txt", message, err => {
    if (err) {
        console.log("error in writeFile: ", err);
    }

    console.log("writeFile was successful!");
}); // joriy direktoriyada catnip.txt faylini yaratmoqchiman, eer ga qavs kerakmas, chunki err funkciyada bitta argument bor

//SYNC version of writeFile
//2 ta arghument berishimiz kerak syncga
//fs.writeFileSync(__dirname + "/catnip2.txt", message);

let obj = {
    name: "ivana",
    age: 24,
    food: "pizza"
};

fs.writeFileSync(__dirname + "/myFile.json", JSON.stringify(obj, null, 4));

//fs.readdir()

//direktorioyani uqish uchun ishlatiladi
//2 ta argument ishlatadi

//uqilishi kerak bulgan papkani yuli tukliq kursatilishi kerak

var myPath = __dirname + "/public";
fs.readdir(myPath, (err, files) => {
    if (err) {
        console.log("error in readdir: ", err);
        process.exit();
    }
    console.log("files: ", files);
});

//SYNC readdir
//1 ta argument berish mumkion
var directory = fs.readdirSync(myPath);

console.log("Directory: ", directory);

//fs.stat

//2 ta argument oladi, fayl yoki papka yulio va callback
fs.stat(myPath, function(err, stats) {
    if (err) {
        console.log("FS stat err: ", err);
        process.exit();
    } else {
        console.log("Stats is file: ", stats.isFile());
        console.log("Stats is directory: ", stats.isDirectory());

        //stat da 2 ta metodi bor
        //isFile()
        //isDirectory
        //ikkalasi ham boolenni qatytaradi
        //myPath filemi yoki direktoriyami sdhuni aniqlaydi
    }
});

//SYNC stat versiyasi

var myStatsObj = fs.statSync(__dirname);
console.log("My Stats Object is: ", myStatsObj.isDirectory());
//statSync
//isFile()
//isDirectory
//ikkalasi ham boolenni qatytaradi
//myPath filemi yoki direktoriyami sdhuni aniqlaydi

//fs.readFile()
//2 ta argument ketadi: faylgacham yul va callback

var myPath2 = __dirname + "/public/index.html";
fs.readFile(myPath2, "utf8", function(err, myFile) {
    if (err) {
        console.log("Read File got error: ", err);
        process.exit();
    }
    console.log("Read File successfuly done: ", myFile);
});

//SYNC read file
//2 ta argument oladi

var myPath3 = __dirname + "/catnip.txt";

var file = fs.readFileSync(myPath3, "utf8");

console.log("Sync read file is: ", file);

//////////=======================================================
//////////=======================================================
//////////=======================================================
//////////=======================================================
//////////=======================================================

///How to add properties to object uy vazifa

let obj = {};
//manually add properties and values to my obj
obj.name = "ivana";
obj["age"] = 24;

//dynamic qushish
var property = "address";
var myAddress = "Potsdamer Str 188";

//////////=======================================================
//////////=======================================================
//////////=======================================================
//////////=======================================================
//////////=======================================================
//////////=======================================================
//////////=======================================================
obj[property] = myAddress; //muhim qator

//array bilan dynamic
var arr = ["pizza", "hamburger", "spinach with bacon"];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    obj[arr[i]] = i;
}

console.log(obj);
//natija shunday bulishi kk
// {
//     pizza: 0,
//     hamburger: 1,
//     'spinach with bacon': 2
// }
