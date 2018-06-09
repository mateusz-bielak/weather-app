const request = require('request-promise');

const apiKey = 'AIzaSyCCPCftNRWGuwXoRcLzQoYvPm9S9NwwjIk';
const url =
    'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia';

const location = request({
    url: `${url}&${apiKey}`,
    json: true,
}).then(response => console.log(response));
