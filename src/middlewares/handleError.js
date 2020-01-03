function handleError(err, req, res, next) {
  res.status(err.status || 500).json({ err: { message: err.message } });
  return next();
}

module.exports = handleError;
