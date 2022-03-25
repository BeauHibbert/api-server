'use strict';

const iModel = require('../model/lib/iModel.js');
const { sequelize, footballModel } = require('../model');

beforeAll(async => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing the model interface', () => {
  test('should create a team', async () => {
    const footballCollection = new iModel(footballModel);
    const footballInstance = await footballCollection.create({team: 'test team'});

    expect(footballInstance.team).toEqual('test team');
    expect(footballInstance.team).toBeFalsey();
  });
});