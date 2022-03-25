
'use strict';

function handle404(req, res, next) {
  res.status(404).send('404 error not found');
}

module.exports = handle404;