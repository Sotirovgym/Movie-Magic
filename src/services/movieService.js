const fs = require('fs');
const path = require('path');
const data = require('../config/database.json');

exports.create = (movieData) => {
    movieData.id = data.length + 1;
    data.push(movieData);
    fs.writeFile(path.resolve('src/config/database.json'), JSON.stringify(data), 'utf-8', () => console.log('The movie was created successfully!'));
}

exports.getAll = () => {
    return data;
}

exports.getByID = (id) => {
    const movie = data.find(movie => movie.id == id);
    return movie;
}