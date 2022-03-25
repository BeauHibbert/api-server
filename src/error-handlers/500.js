'use strict';

function handle500(req, res, next) {
  res.status(500).send('500 error uh oh whoopsie daisy');
}

module.exports = handle500;