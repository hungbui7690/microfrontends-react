/*
  Scaffolding the Container
  - create client/container/ 
    > do the same like products/ 
      + npm init -y
      + install packages
      + create public/index.html
      + create webpack.config.js

  - now, we have 2 projects > we will learn how to integrate these 2 projects together 
*/

import faker from 'faker'

let products = ''

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName()

  products += `
    <div>${name}</div>
  `
}

document.querySelector('#dev-products').innerHTML = products
