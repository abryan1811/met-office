import { readFileSync } from "fs";
import fs from "fs";

export default function parseMyJson(filePath) {    
    fs.readFile(filePath, function (error, content) {
        let data = JSON.parse(content);
        

        for(let i = 0; i < data.SiteRep.Wx.Param.length; i++) {
            //console.log(data.SiteRep.Wx.Param[i]);
        }

        // data.SiteRep.Wx.Param.forEach(param => 
        //     console.log("Name: " + param.name + ", Units: " + param.units + ", Value: " + param.$ )
        // );

        //console.log(data.SiteRep.DV.Location.Period);

        data.SiteRep.DV.Location.Period.map(ProcessPeriod);
    });
}

function ProcessPeriod(period) {
    //console.log("Type: " + period.type);
    period.Rep.forEach(rep =>
        console.log("True Temperature: " + rep.T + ", But Feels Like: " + rep.F)
    );
}

parseMyJson('./metofficeCambridge.json');





// import forecast from "./forecastclass.js"

// export default class JSONParser {

//     parseWeatherInfo(weather) {
//         logger.debug('Parsing single JSON:', weather);
//         return new Forecast(
//             forecast.forecast,
            
//         );
//     }

//     getForecast(data) {
//         logger.info('Parsing JSON weather');

//         let rawDataList = JSON.parse(data);
//         let weather = [];
//         for ( let i = 0; i < rawDataList.length; i++){
//             weather.push(this.parseWeatherInfo(rawDataList[i]));
//         }
//         return weather;
        
//         /* alternative
//         return JSON.parse(data).map(this.parseSingleTransaction);
//         */
//     }
// }
