let express = require("express");
let api = express.Router();

require('./routes/zip-codes.route')(api);

module.exports = (app) => {
    app.use('/api', api);
};