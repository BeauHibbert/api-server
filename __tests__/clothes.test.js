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

describe('Testing REST API requests to clothes routes', () => {

  // test('Should create a clothes record', async () => {

  //   let response = await request.post('/food').send({
  //     type: 'pants',
  //     color: 'blue',
  //     size: 1,
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body.type).toEqual('pants');
  //   expect(response.body.color).toEqual('blue');
  //   expect(response.body.size).toEqual(1);
  // });

  // test('Should read all clothes records', async () => {

  //   let response = await request.get('/clothes');

  //   expect(response.status).toEqual(200);
  // });

  // test('Should read an individual clothes record', async () => {

  //   let response = await request.get('/clothes/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should update an individual clothes record', async () => {

  //   let response = await request.put('/clothes/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should destroy an individual clothes record', async () => {

  //   let response = await request.destroy('/clothes/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body).toEqual(null);
  // });
});