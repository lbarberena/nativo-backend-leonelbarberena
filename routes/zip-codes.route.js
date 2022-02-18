'use strict';
let { GET, GetZipCodes, GetByZipCode } = require('../controllers/zip-codes.controller');

module.exports = (api) => {
    api.get('/zipcodes/all', GET);
    api.get('/zipcodes', GetZipCodes);
    api.get('/zipcodes/:zipCode', GetByZipCode);
};