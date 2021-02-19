function sendJSONResponse(res, status, data, message) {
  // create unified JSON response in the response body
  return res.status(status).json({
    message,
    data,
  });
}

function catchErrors(fn) {
  // automatically catch errors from routes
  const caught = (req, res, next) => fn(req, res, next).catch(next);
  return caught;
}

function getCurrentTimeStamp() {
  // return the number value for the current time
  return Math.floor(new Date().getTime());
}

module.exports = { getCurrentTimeStamp, catchErrors, sendJSONResponse };
