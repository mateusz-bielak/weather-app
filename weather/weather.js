const request = require('request-promise');

const geocode = require('../geocode/geocode');

const getWeather = address => {
    geocode
        .geocodeAddress(address)
        .then(res => {
            const api = 'https://api.darksky.net/forecast/4af2f6b9164e3604621f6bee6b86536f/';
            const url = `${api}${res.latitude},${res.longitude}`;

            if (res === undefined) {
                reject();
            }

            return request({ url, json: true }).then(res => {
                const { temperature, apparentTemperature } = res.currently;
                return console.log(
                    `It's currently ${temperature}F. It feels like ${apparentTemperature}F.`,
                );
            });
        })
        .catch(() => console.log('Unable to fetch weather.'));
};

module.exports = {
    getWeather,
};
