'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

router.post('/food', async (req, res, next) => {
  let newFoodData = req.body;
  let responseData = await FoodModel.create(newFoodData);
  res.send(responseData);
});

router.get('/food', async (req, res, next) => {
  let getFoodData = req.body;
  let responseData = await FoodModel.findAll(getFoodData);
  res.send(responseData) ;
});

router.get('/food/:id', async (req, res, next) => {
  let getSingleFoodData = req.params.id;
  let responseData = await FoodModel.findOne({ where: { id: getSingleFoodData } });
  res.send(responseData) ;
});

router.put('/food/:id', async (req, res, next) => {
  let putSingleFoodData = req.params.id;
  let responseData = await FoodModel.update({calories: req.body.calories, foodGroup: req.body.foodGroup}, { where: { id: putSingleFoodData } });
  res.send(responseData) ;
});

router.delete('/food/:id', async (req, res, next) => {
  let deleteSingleFoodData = req.params.id;
  let responseData = await FoodModel.destroy({ where: {deleteSingleFoodData} });
  res.send(responseData) ;
});

module.exports = router;