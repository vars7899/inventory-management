export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    status: "failure",
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : "Not available",
  });
};
