module.exports.notFound = (req, res, next) => {
  console.log(req);
  const error = new Error(`There is no such a url => - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports.errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
  });
};
