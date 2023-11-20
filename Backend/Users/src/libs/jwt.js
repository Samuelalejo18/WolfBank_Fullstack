//Crear un token
const jwt = require('jsonwebtoken');
function createAccessToken(payload) {
    return new Promise((resolve, reject) => {

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 300, // 5 minutos
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

