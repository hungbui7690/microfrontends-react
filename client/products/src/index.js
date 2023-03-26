/*
  A Touch More on Webpack P2
  - create public/index.html
    > we don't add script tag here, but when we use webpack, we will let webpack do this for us 
    > explain in the picture 
    > we will use html-webpack-plugin and it will figure out the names for us

  > webpack.config.js
  > after setup, we can go to http://localhost:8081/
  
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
