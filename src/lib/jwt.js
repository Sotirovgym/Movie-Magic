const jwt = require('jsonwebtoken');

function sign(payload, secretOrPrivateKey, options){
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
            if (err){
                reject(err);
                return;
            }

            resolve(token);
        });
    });

    return promise;
}

module.exports = { 
    sign 
};