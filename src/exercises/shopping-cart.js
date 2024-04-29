/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */

//Fetch API Data from the above API's mentioned.
const getProductIds = function () {
  let productIDs = [];
  fetch('http://localhost:4002/cart').then(res => res.json())
    .then(data => {
      if (data.length !== 0) {
        for (var i in data) {
          productIDs.push(data[i].id);
        }
      }
    })
    .catch(err => {
      console.log("Error in cart API call:", err);
    });

  return productIDs;
}

const getProductDetails = function () {
  const productIDs = getProductIds();
  let products = [];
  fetch('http://localhost:4002/products').then(res => res.json())
    .then(data => {
      if (data.length !== 0) {
        for (var i in data) {
          for (var j in productIDs) {
            if (data[i].id == productIDs[j])
              products.push(data[i]);
          }
        }
        let tableData = getTableData(products);
        return tableData;
      }
    })
    .catch(err => {
      console.log("Error in products API call:", err);
    });

}
const getTableData = function (dataset) {
  let rows = [];
  const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');
  for (var i in dataset) {
    let rowId = 'shopping-item' + dataset[i].id;
    let itemID = dataset[i].id;
    let itemName = dataset[i].name;
    let tableRow = `<tr id="${rowId}">` +
      `<td>` + itemID + `</td>` + 
      `<td>` + itemName + `</td>` + 
      `</tr>`
      ;
      rows.push(tableRow);
  }
  for(var i in rows){
    tbodyElem.innerHTML += rows[i];
  }
  return rows;
}


const View = {
  init: () => {
    getProductDetails();
    console.log('TODO: Please see the above requirement');
  }
};
document.addEventListener('DOMContentLoaded', View.init);
