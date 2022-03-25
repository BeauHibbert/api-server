'use strict';

function validateRequest(req, res, next) {

  if (req.query.name) {
    res.status(200).send(`{ name: "${req.query.name}" }`);
  } else {
    next({ status: 500, message: 'no name with request' });
  }

}

module.exports = validateRequest;