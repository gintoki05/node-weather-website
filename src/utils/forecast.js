const request = require('request')

const forecast = (lat, lng, callback) => {
    const url = 'https://api.darksky.net/forecast/d4c7c489b8f9f9ff5dd6ed339a9ede77/' + lat + ',' + lng + '?units=si&lang=id'

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined,
                `${body.daily.data[0].summary} Suhu sekarang ${
                    body.currently.temperature
                  } derajat diluar.`,
            );
        }
    })
}

module.exports = forecast