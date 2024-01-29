const Cast = require('../models/Cast');

exports.create = (data) => {
    return Cast.create(data);
}

exports.getAll = () => {
    return Cast.find();
}

exports.getManyByIDs = (castIDs) => {
    return Cast.find({ _id: { $in: castIDs }});
}