import { createInterface } from 'readline';
import ForecastService from './services/forecastService.js';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

export default class ConsoleRunner {
    constructor(forecastService) {
        this.forecastService = forecastService;
    }

    handleError(reason) {
        console.error('\n' + reason);
        this.runForever();
    }

    promptForLocation() {
        return new Promise((resolve, reject) =>
            readline.question('\nEnter your location: ', resolve)
        );
    }
    
    displayForecast(forecast) {
        // forecast.Period.forEach(period => {
        //     console.log(`\nDate: ${period.value}`);
        //     this.displayReps(period.Rep);
        // });
        // TODO:3 implement Display forecast
        //const newForecast = new ForecastService(forecast);
        //newForecast.forecastFromLocationList()

        console.log("Forecast: ", forecast);
    }

    runForever() {
        this.promptForLocation()
            .then(location => this.forecastService.getForecastForLocation(location.replace(/\s/g, '')))
            .then(forecast => {
                this.displayForecast(forecast);
                this.runForever();
            })
            .catch(reason => this.handleError(reason));
    }
}