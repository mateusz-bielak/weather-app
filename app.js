const request = require('request-promise');
const yargs = require('yargs');

const apiKey = 'AIzaSyCCPCftNRWGuwXoRcLzQoYvPm9S9NwwjIk';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        },
    })
    .help()
    .alias('h', 'help').argv;

const encodedAddress = encodeURI(argv.a);
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

const locationOptions = {
    url: `${url}&key=${apiKey}`,
    json: true,
};

const location = request(locationOptions)
    .then(response => {
        if (response.status === 'ZERO_RESULTS') {
            return console.log('Unable to find that address.');
        }

        console.log(`Address: ${response.results[0].formatted_address}`);
        console.log(`Latitude is ${response.results[0].geometry.location.lat}`);
        console.log(`Longitude is ${response.results[0].geometry.location.lng}`);
    })
    .catch(error => console.log('Unable to connect to Google servers.'));
