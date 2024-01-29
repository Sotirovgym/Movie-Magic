const Movie = require('../models/Movie');

exports.create = (movieData) => {
    return Movie.create(movieData);
}

exports.getAll = () => {
    // Movie.find() returns an array of Documents, that's why we use lean() on the query result to get the object
    return Movie.find();
}

exports.getByID = (id) => {
    return Movie.findById(id).populate('casts');
}

exports.attachCast = async (movieID, castID) => {
    // const movie = await this.getByID(movieID);
    // movie.casts.push(castID);
    // return movie.save();
    return Movie.findByIdAndUpdate(movieID, { $push: { casts: castID } });
}