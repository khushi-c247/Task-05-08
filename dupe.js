"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var str;
;
var dupeObj = {};
var count = 0;
var char = "";
var findDuplicate = function (str) {
    for (var i in str) {
        for (var j in str) {
            if (str[i] === str[j]) {
                count = count + 1;
            }
        }
        char = str[i];
        if (count > 0) {
            dupeObj[char] = count;
        }
        count = 0;
    }
    return dupeObj;
    // console.log(dupeObj);
};
var writeObj = function (obj) {
    var arrObj = [obj];
    var updateJson = JSON.stringify(arrObj);
    fs.writeFile('dupe.json', updateJson, function () {
        console.log("Duplicates are saved in the JSON file");
    });
};
// const readData = ()
fs.readFile("data.txt", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        str = data.toString().replace(/\s/g, '');
    }
    var dupeObj = findDuplicate(str);
    writeObj(dupeObj);
});
