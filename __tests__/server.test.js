'use strict';

const supertest = require('supertest');
const { sequelize, footballModel} = require('../src/models');
const { app } = require('../src/server/app.js');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing our REST API', () => {
  test('Should delete a football', async () => {
    // what should I test?

    // create test data
    let testFootball = await footballModel.create({
     team: 'WSU',
     wins: 10,
     losses: 0
    });

    let response = await request.delete(`/funko/${testFootball.id}`);

    expect(response.status).toEqual(200);
    expect(response.body.team).toEqual('WSU');
    expect(response.body.wins).toEqual(10);
    expect(response.body.losses).toEqual(0);
  });
});