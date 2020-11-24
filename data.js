var faker = require('faker');

var data = [];
var categories = ['Watersports', 'Soccer', 'Chess', "Running"];

faker.seed(100)

for (let i = 0; i <= 503; ++i) {
  var category = faker.helpers.randomize(categories);
  data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.commerce.productDescription()}`,
    price: Number(faker.commerce.price())
  })
}

module.exports = function () {
  return {
    products: data,
    categories: categories,
    orders: []
  }
};

