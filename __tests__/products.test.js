'use strict';

const Products = require('../src/models/categories');
const products = new Products();

const supergoose = require('./supergoose');


beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);


describe('categories()', () => {
  console.log('Hello');
});

