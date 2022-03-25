'use strict';

const iModel = require('../model/lib/iModel.js');
const { sequelize, footballModel, baseballModel } = require('../src/models');

beforeAll(async => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing the model interface', () => {
  test('should create a football', async () => {
    // const footballCollection = new iModel(footballModel);
    const footballInstance = await footballCollection.create({team: 'test team'});

    expect(footballInstance.team).toEqual('test team');
    expect(footballInstance.team).toBeFalsy();
  });
});


// 'use strict';

// const { sequelize, funkoCollection, orderCollection, customerCollection }  = require('../collection');

// beforeAll(async () => {
//   await sequelize.sync();
// });
// afterAll(async () => {
//   await sequelize.drop();
// });

// describe('testing the collection interface', () => {
//   test('Shuold create a Funko', async () => {

//     const funkoInstance = await funkoCollection.create({name: 'test funko'});

//     expect(funkoInstance.name).toEqual('test funko');
//     expect(funkoInstance.number).toBeFalsy();
//   });

//   test('should read customers and include orders', async () => {

//     let testCustomer = await customerCollection.create({ name: 'Jacob'});
//     let testOrder = await orderCollection.create({ product: 'skates', customerId: testCustomer.id });

//     let customerWithOrder = await customerCollection.read(testCustomer.id, { include: orderCollection.model });
//     expect(customerWithOrder.name).toEqual(testCustomer.name);
//     expect(customerWithOrder.orders).toBeTruthy();
//     expect(customerWithOrder.orders[0].product).toEqual(testOrder.product);
//   });
// });