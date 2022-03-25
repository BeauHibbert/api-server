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

describe('Testing REST API requests to football routes', () => {

  // test('Should create a football record', async () => {

  //   let response = await request.post('/baseball').send({
  //     type: 'pants',
  //     color: 'blue',
  //     size: 1,
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body.type).toEqual('pants');
  //   expect(response.body.color).toEqual('blue');
  //   expect(response.body.size).toEqual(1);
  // });

  // test('Should read all football records', async () => {

  //   let response = await request.get('/football');

  //   expect(response.status).toEqual(200);
  // });

  // test('Should read an individual football record', async () => {

  //   let response = await request.get('/football/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should update an individual football record', async () => {

  //   let response = await request.put('/football/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should destroy an individual football record', async () => {

  //   let response = await request.destroy('/football/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body).toEqual(null);
  // });
});