/*
  Some Background on Webpack
  - create webpack.config.js
  - "start": "webpack"
    > "start": "SET NODE_OPTIONS=--openssl-legacy-provider && webpack"
    > we set the options, because this package is old and we use the new nodejs version

  
  > npm run start
    > create main.js inside dist/
    > pic
  

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
