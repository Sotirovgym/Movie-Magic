const Cast = require('../models/Cast');

exports.create = (data) => {
    return Cast.create(data);
}