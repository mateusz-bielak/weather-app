const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.address);
