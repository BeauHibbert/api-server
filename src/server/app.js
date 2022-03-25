'use strict';

const express = require('express');
// const baseballRouter = require('../routes/baseball.js');
// const footballRouter = require('../routes/football.js');

const { footballCollection } = require('../models');
const { baseballCollection } = require('../models');

const app = express();

app.delete('/football/:id', async (req, res, next) => {

  const { id } = req.params;
  let removedFootball = await footballCollection.delete(id);
  res.send(removedFootball);
});

app.delete('/baseball/:id', async (req, res, next) => {

  const { id } = req.params;
  let removedBaseball = await baseballCollection.delete(id);
  res.send(removedBaseball);
});

// app.use(express.json());
// app.use(baseballRouter);
// app.use(footballRouter);

module.exports = {
  app
};