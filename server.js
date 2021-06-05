const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
    userNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

//routes
app.use(require('./routes/api'));
app.use(require('./routes/views'));

app.listen(PORTm, () => {
    console.log('App running on port ${PORT}!');
});