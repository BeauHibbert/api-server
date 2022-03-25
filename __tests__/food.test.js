'use strict';

const { beforeAll, afterAll } = require('@jest/globals');
const supertest = require('supertest');
const { sequelize } = require('../src/models');
const server = require('../src/server/app.js');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API requests to food routes', () => {

  test('Should create a food record', async () => {

    let response = await request.post('/food').send({
      calories: 150,
      foodGroup: 'vegetables',
    });

    expect(response.status).toEqual(200);
    expect(response.body.calories).toEqual(150);
    expect(response.body.foodGroup).toEqual('vegetables');
  });

  test('Should read all food records', async () => {

    let response = await request.get('/food');

    expect(response.status).toEqual(200);
  });

  // test('Should read an individual food record', async () => {

  //   let response = await request.get('/food/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should update an individual food record', async () => {

  //   let response = await request.put('/food/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should destroy an individual food record', async () => {

  //   let response = await request.destroy('/food/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body).toEqual(null);
  // });
});