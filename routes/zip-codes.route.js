'use strict';
let { GetZipCodes, GetByZipCode } = require('../controllers/zip-codes.controller');

module.exports = (api) => {
    api.get('/zipcodes', GetZipCodes);
    api.get('/zipcodes/:zipCode', GetByZipCode);
};