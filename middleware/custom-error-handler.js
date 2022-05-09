class CustomErrorAPI extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomErrorAPI(msg, statusCode);
};

module.exports = { createCustomError, CustomErrorAPI };
