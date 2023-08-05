"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var GetjsonData = function () {
    fs.readFile('color.json', function (err, data) {
        var stringData;
        var jsonData;
        if (err) {
            console.log(err);
        }
        else {
            stringData = data.toString();
            jsonData = JSON.parse(stringData);
            // console.log(jsonData);
            
            // //Push
            // jsonData.push({color:"pink" , value: "#009"});
            // console.log(jsonData);

            // //Pop
            // jsonData.pop({color:"pink" , value: "#009"});
            // console.log(jsonData);

            // //shift
            // jsonData.shift({color:"pink" , value: "#009"});
            // console.log(jsonData);

            // //unshift
            // jsonData.unshift({color:"pink" , value: "#009"});
            // console.log(jsonData);

            // slice
            // const sliced = jsonData.slice(1, 3);
            // console.log(sliced);

        }
        return jsonData;
    });
};
var jsonData = GetjsonData();
console.log(jsonData);
