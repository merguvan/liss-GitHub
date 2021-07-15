module.exports.notFound = (req, res, next) => {
  const error = new Error(`There is no such a url => - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
//200 success
///400-500 hata
module.exports.errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
  });
};
