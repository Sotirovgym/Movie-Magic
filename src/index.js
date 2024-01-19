const express = require("express");
const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');

const app = express();
const port = 4200;

configExpress(app);
configHandlebars(app);

app.listen(port, () => {
    console.log(`The app is running ${port}...`);
});