const request = require('request-promise');

const getWeather = ({ latitude, longitude }) => {
    const url = `https://api.darksky.net/forecast/4af2f6b9164e3604621f6bee6b86536f/${latitude},${longitude}`;

    return request({ url, json: true })
        .then(res =>
            console.log(
                `It's currently ${res.currently.temperature}F. It feels like ${
                    res.currently.apparentTemperature
                }F.`,
            ),
        )
        .catch(() => console.log('Unable to fetch weather.'));
};

module.exports = {
    getWeather,
};
