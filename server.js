const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');


dotenv.config({
    path: './config/config.env'
});

connectDB();
const api = require('./routes/api')

const app = express();

app.use(express.json());

app.use('/api/v1/dev', api)

const PORT = process.env.PORT || 3000

app.listen(PORT,
    console.log(`Server runnning in ${process.env.NODE_ENV} on ${PORT}
${process.env.LINK}${PORT}/`.cyan.bold));