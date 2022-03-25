'use strict';

const express = require('express');
const { BaseballModel } = require('../models');

const router = express.Router();

router.post('/baseball', async (req, res, next) => {
  let newBaseballData = req.body;
  let responseData = await BaseballModel.create(newBaseballData);
  res.send(responseData);
});

router.get('/baseball', async (req, res, next) => {
  let getBaseballData = req.body;
  let responseData = await BaseballModel.findAll(getBaseballData);
  res.send(responseData) ;
});

router.get('/baseball/:id', async (req, res, next) => {
  let getSingleBaseballData = req.params.id;
  let responseData = await BaseballModel.findOne({ where: { id: getSingleBaseballData } });
  res.send(responseData) ;
});

router.put('/baseball/:id', async (req, res, next) => {
  let putSingleBaseballData = req.params.id;
  let responseData = await BaseballModel.update({calories: req.body.calories, baseballTeam: req.body.baseballTeam}, { where: { id: putSingleBaseballData } });
  res.send(responseData) ;
});

router.delete('/baseball/:id', async (req, res, next) => {
  let deleteSingleBaseballData = req.params.id;
  let responseData = await BaseballModel.destroy({ where: {deleteSingleBaseballData} });
  res.send(responseData) ;
});

module.exports = router;