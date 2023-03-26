/*
  A Touch More on Webpack P1
  - generate bundled js file does not help so much, because we need to load it in html file to make it available in the browser
  - webpack.config.js
    - add port on devServer

  - package.json: 
    + "webpack serve"

  - start app again
  (***) need to update webpack-cli & html-webpack-plugin (check package.json)

  > http://localhost:8081/main.js > now we can access this 

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
