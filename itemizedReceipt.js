// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const taxRate = .101 //Sales tax rate for my city is 10.1%, although later on perhaps this could be pulled from a data list. 
const logReceipt = function(...menuItems){
  let subTotal = 0;
  menuItems.forEach(function(menuItems){
    subTotal += menuItems.price;
    tax = menuItems.price * taxRate;
    console.log(`${menuItems.descr}: ${menuItems.price} Tax: ${tax} Total: ${subTotal + tax}`)
  })
}

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
