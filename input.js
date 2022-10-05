import JSONParser from './ParseJson.js';


// create a class to find all the weather types in the json file
// find the Id's in all the locations
// return the Id requested



function findForecast(filePath){
    if (filePath.endsWith('.json')) {
        return new JSONParser();
    }
    
}


let cambridgeForecast = findForecast("./metofficeCambridge.json");

console.log(cambridgeForecast);