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

describe('Testing REST API requests to baseball routes', () => {

  test('Should create a baseball record', async () => {

    let response = await request.post('/baseball').send({
      calories: 150,
      baseballTeam: 'vegetables',
    });

    expect(response.status).toEqual(200);
    expect(response.body.calories).toEqual(150);
    expect(response.body.baseballTeam).toEqual('vegetables');
  });

  test('Should read all baseball records', async () => {

    let response = await request.get('/baseball');

    expect(response.status).toEqual(200);
  });

  // test('Should read an individual baseball record', async () => {

  //   let response = await request.get('/baseball/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should update an individual baseball record', async () => {

  //   let response = await request.put('/baseball/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  // });

  // test('Should destroy an individual baseball record', async () => {

  //   let response = await request.destroy('/baseball/:id').send({
  //     id: 'xyz',
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body).toEqual(null);
  // });
});