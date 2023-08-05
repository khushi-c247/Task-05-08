import * as fs from 'fs'
let str: string;
interface dupeObj { [key: string]: Number };
let dupeObj = {};
let count: number = 0;
let char: string = "";

const findDuplicate = (str: String): object => {
    for (let i in str) {
        for (let j in str) {
            if (str[i] === str[j]) {
                count = count + 1;
            }
        }
        char = str[i]
        if (count > 0) {
            dupeObj[char] = count;

        }
        count = 0;
    }
    return dupeObj;
}

// Write Data  from File
const writeObj = (obj: object) => {
    let arrObj: object[] = [obj]
    let updateJson = JSON.stringify(arrObj)
    fs.writeFile('dupe.json', updateJson, () => {
        console.log("Duplicates are saved in the JSON file");
    })
}
// Read Data from file
fs.readFile("data.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        str = data.toString().replace(/\s/g, '');
    }

    let dupeObj = findDuplicate(str);
    writeObj(dupeObj)
})

