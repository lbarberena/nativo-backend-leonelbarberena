'use strict';
const axios = require('axios')

module.exports = {
    GetZipCodes: async function ( req, res, next ) {
        try {
            axios
            .get('https://www.wikitable2json.com/api/Postal_codes_in_Nicaragua?lang=en&format=keyValue&cleanRef=true')
            .then( resp => {
                const codesArray = resp.data[0];
                codesArray.forEach( element => {
                    element.zipCode = element["Postal code"];
                    delete element["Postal code"];
                    delete element["Department"];
                    delete element["Municipality"];
                    delete element["Neighbourhood"];
                });
                return res.status( 200 ).send({
                    success: true,
                    msg: 'Zip codes',
                    data: resp.data[0],
                });
            })
            .catch( error => {
                return res.status( 200 ).send({
                    success: false,
                    msg: 'Error ocurred',
                    data: error,
                });
            });
        } catch( error ) {
            return res.status( 500 ).send({
                success: false,
                msg: 'ERROR',
                data: {}
            });
        }
    },
    GetByZipCode: async function ( req, res, next ) {
        try {
            axios
            .get('https://www.wikitable2json.com/api/Postal_codes_in_Nicaragua?lang=en&format=keyValue&cleanRef=true')
            .then( resp => {
                const codesArray = resp.data[0];
                codesArray.forEach( element => {
                    element.zipCode = element["Postal code"];
                    delete element["Postal code"];
                });
                const foundZipCode = codesArray.find( code => code.zipCode === req.params.zipCode);
                return res.status( 200 ).send({
                    success: true,
                    msg: 'Zip code found',
                    data: foundZipCode,
                });
            })
            .catch( error => {
                return res.status( 200 ).send({
                    success: false,
                    msg: 'Error ocurred',
                    data: error,
                });
            });
        } catch( error ) {
            return res.status( 500 ).send({
                success: false,
                msg: 'ERROR',
                data: {}
            });
        }
    },
};