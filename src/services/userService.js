const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.register = (userData) => {
    return User.create(userData);
}

exports.login = async (email, password) => {
    // Get user from db
    const user = await User.findOne({ email: email });
    
    // Check if user exists
    if (!user){
        throw new Error("Email or password doesn't match!");
    }

    // Check if password is valid
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid){
        throw new Error("Email or password doesn't match!");
    }

    // Generate JWT Token
    const payload = {
        _id: user._id,
        email: user.email
    }
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h'});

    // Return the token
    return token;
}