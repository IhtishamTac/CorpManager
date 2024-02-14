const express = require('express');
const app = express();

const employeesRoute = require('./api/routes/employee');

app.use('/employees');

module.exports = app;