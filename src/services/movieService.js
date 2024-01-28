const fs = require('fs');
const path = require('path');
const Movie = require('../models/Movie');

exports.create = async (movieData) => {
    return await Movie.create(movieData);
}

exports.getAll = async () => {
    // movies is array of Document which is not an object, that's why we use lean() on the query result to get the object
    const movies = await Movie.find().lean();
    return movies;
}

exports.getByID = (id) => {
    const movie = data.find(movie => movie.id == id);
    return movie;
}