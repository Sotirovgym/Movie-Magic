const express = require("express");
const mongoose = require("mongoose");

const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');
const routes = require('./routes');

const app = express();
const port = 4200;

configExpress(app);
configHandlebars(app);

app.use(routes);

mongoose.connect('mongodb://localhost:27017/magic-movies')
    .then(() => {
        console.log('DB Connected');

        // We start the server when the DB is connected
        app.listen(port, () => console.log(`The app is running ${port}...`));
    })
    .catch(err => console.log(err));