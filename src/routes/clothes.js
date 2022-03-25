'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router();

router.post('/clothes', async (req, res, next) => {
  let newClothesData = req.body;
  let responseData = await ClothesModel.create(newClothesData);
  res.send(responseData);
});

router.get('/clothes', async (req, res, next) => {
  let getClothesData = req.body;
  let responseData = await ClothesModel.findAll(getClothesData);
  res.send(responseData) ;
});

router.get('/clothes/:id', async (req, res, next) => {
  let getSingleClothesData = req.params.id;
  let responseData = await ClothesModel.findOne({ where: { id: getSingleClothesData } });
  res.send(responseData) ;
});


router.put('/clothes/:id', async (req, res, next) => {
  let putSingleClothesData = req.params.id;
  let responseData = await ClothesModel.update({type: req.body.type, color: req.body.color, size: req.body.size}, { where: { id: putSingleClothesData } });
  res.send(responseData) ;
});

router.delete('/clothes/:id', async (req, res, next) => {
  let deleteSingleClothesData = req.params.id;
  let responseData = await ClothesModel.destroy({ where: { id: deleteSingleClothesData} });
  res.send(responseData) ;
});

module.exports = router;