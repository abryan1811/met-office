export default class ForecastService {
    constructor(sitelistService, forecastApiClient) {
        this.sitelistService = sitelistService;
        this.forecastApiClient = forecastApiClient;
    }

    getForecastForLocation(locationName) {
        return this.sitelistService.getLocations().then(
            locations => this.forecastFromLocationList(locationName, locations)
        )
    }

    forecastFromLocationList(locationName, locationList) {
        // TODO find locationList item with locationName, hence get the id
        let locationId = locationList.find(
            location => location.name === locationName
        )?.id;

        if (locationId) {
            // use the id we just obtained to get forecast
            const forecast = this.forecastApiClient.getForecastForLocation(locationId);
            return forecast;
        } else {
            return null;
        }
    }
}