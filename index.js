const express = require('express');
const app = express();
const dotenv = require('dotenv');
let cors = require('cors');

const endpoints = require('./endpoints');
dotenv.config();

app.listen(process.env.PORT, function() {
    console.log(`Node server running on http://localhost:${ process.env.PORT }`);
});

app.use(cors({ origin: true }));

endpoints(app);