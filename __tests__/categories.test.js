'use strict';

const Categories = require('../src/models/categories');
const categories = new Categories();

const supergoose = require('./supergoose');


beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);


describe('categories()', () => {
  console.log('Hello');
});

