const { CustomErrorAPI } = require("../middleware/custom-error-handler");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomErrorAPI) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
