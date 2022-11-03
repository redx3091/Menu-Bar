const JWT = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors/index.errors');

const auth = async (req, res, next ) => {
  //* check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Autenticacion ivalida');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = {userId: payload.userId, email: payload.email}
    next()
  } catch (error) {
    throw new UnauthenticatedError('Autenticacion ivalida')
  }
}

module.exports = auth;
