var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100) + 1;
 var item_object = Object.assign({},{itemName:'itemName',itemPrice:'itemPrice'});;
  item_object[itemName] = itemPrice
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
