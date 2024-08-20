import jwt from 'jwt-simple';
import moment from 'moment';

// Clave secreta
const secret = 'SECRET_KEY_pRoJeCt_Social_Network_';

//  Generar token
const createToken = (user) => {
   const payload = {
    userId: user._id,
    role: user.role,
    // Fecha de emision
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
   };

   // Devolver el Token codificado
   return jwt.encode(payload, secret);
};

export {
    secret,
    createToken
}