'use strict';

const express = require('express');
const { FootballModel } = require('../models');

const router = express.Router();

router.post('/football', async (req, res, next) => {
  let newFootballData = req.body;
  let responseData = await FootballModel.create(newFootballData);
  res.send(responseData);
});

router.get('/football', async (req, res, next) => {
  let getFootballData = req.body;
  let responseData = await FootballModel.findAll(getFootballData);
  res.send(responseData) ;
});

router.get('/football/:id', async (req, res, next) => {
  let getSingleFootballData = req.params.id;
  let responseData = await FootballModel.findOne({ where: { id: getSingleFootballData } });
  res.send(responseData) ;
});


router.put('/football/:id', async (req, res, next) => {
  let putSingleFootballData = req.params.id;
  let responseData = await FootballModel.update({type: req.body.type, color: req.body.color, size: req.body.size}, { where: { id: putSingleFootballData } });
  res.send(responseData) ;
});

router.delete('/football/:id', async (req, res, next) => {
  let deleteSingleFootballData = req.params.id;
  let responseData = await FootballModel.destroy({ where: { id: deleteSingleFootballData} });
  res.send(responseData) ;
});

module.exports = router;