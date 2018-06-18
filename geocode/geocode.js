const request = require('request-promise');

const geocodeAddress = address => {
    const encodedAddress = encodeURI(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
    const apiKey = 'AIzaSyCCPCftNRWGuwXoRcLzQoYvPm9S9NwwjIk';

    const locationOptions = {
        url: `${url}&key=${apiKey}`,
        json: true,
    };

    return request(locationOptions)
        .then(response => {
            if (response.status === 'ZERO_RESULTS') {
                return console.log('Unable to find that address.');
            }
            const { lat, lng } = response.results[0].geometry.location;
            return {
                latitude: lat,
                longitude: lng,
            };

            // console.log(`Address: ${response.results[0].formatted_address}`);
            // console.log(`Latitude is ${response.results[0].geometry.location.lat}`);
            // console.log(`Longitude is ${response.results[0].geometry.location.lng}`);
        })
        .catch(() => console.log('Unable to connect to Google servers.'));
};

module.exports = {
    geocodeAddress,
};
