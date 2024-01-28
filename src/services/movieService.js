const fs = require('fs');
const path = require('path');
const Movie = require('../models/Movie');

exports.create = (movieData) => {
    return Movie.create(movieData);
}

exports.getAll = () => {
    // Movie.find() returns an array of Documents, that's why we use lean() on the query result to get the object
    return Movie.find();
}

exports.getByID = (id) => {
    return Movie.findById(id);
}