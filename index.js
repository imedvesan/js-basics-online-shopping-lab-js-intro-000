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
 var price = Math.floor(Math.random()*100) + 1;
 var item_object = Object.assign({},{itemName:'item',itemPrice:'price'});;
  item_object[item] = price
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
