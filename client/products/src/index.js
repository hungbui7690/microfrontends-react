/*
  Generating Products
  - create src/index.js
    > we will use faker to generate some random products

  (***) not run yet > we will use webpack to run > next lesson
*/

import faker from 'faker'

let products = ''

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName()

  products += `
    <div>${name}</div>
  `
}

console.log(products)
