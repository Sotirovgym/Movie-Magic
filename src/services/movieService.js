const fs = require('fs');
const path = require('path');
const data = require('../config/database.json');
const Movie = require('../models/Movie');

exports.create = async (movieData) => {
    return await Movie.create(movieData);
}

exports.getAll = () => {
    return data;
}

exports.getByID = (id) => {
    const movie = data.find(movie => movie.id == id);
    return movie;
}