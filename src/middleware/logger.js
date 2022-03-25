function logger(req, res, next) {
  console.log(req.path);
  console.log(req.ip);
  next(); 
}

module.exports = logger;