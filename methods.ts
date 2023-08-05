import { log } from 'console';
import * as fs from 'fs'


const GetjsonData = () => {
    fs.readFile('color.json', (err, data) => {
        let stringData: string;
        let jsonData;
        if (err) {
            console.log(err);

        }
        else {
            stringData = data.toString()
            jsonData = JSON.parse(stringData)
            console.log(jsonData);
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

            // // Length
            // let length = jsonData.length();
            // console.log(length);

            // // toString
            // let str = jsonData.toString()
            // console.log(str);

            //slice
            const sliced = jsonData.slice(1, 3);
            console.log(sliced);



        }
        return jsonData;
    })
}





GetjsonData();







