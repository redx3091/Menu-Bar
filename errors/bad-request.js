const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custon-api-errors');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
