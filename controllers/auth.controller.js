const User = require('../models/user.model');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors/index.errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({user: {email: user.email}, token});
}

const login = async (req, res,) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('por favor introdusca su correo y contraseñas');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError('Correo incorrecto')
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Contraseña incorrecta')
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({user: {email: user.email}, token});
}

module.exports = {
  register,
  login,
}
