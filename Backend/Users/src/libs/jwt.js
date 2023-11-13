//Crear un token
const jwt = require('jsonwebtoken');
function createAccessToken(payload) {
    return new Promise((resolve, reject) => {

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 60, // un minuto
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });

}

module.exports = {
    createAccessToken,
};

