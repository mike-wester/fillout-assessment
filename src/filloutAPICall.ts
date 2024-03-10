import "dotenv/config";

const request = require('request');

const filloutAPICall = (formId, callback) => {
    console.log('HEY LISTEN!');
    request(process.env.URL + formId + '/submissions', { json: true }, (err, res, body) => {
        if (err) { 
            return callback(err);
        }

        return callback(body);
        });
}

module.exports.callApi = filloutAPICall;