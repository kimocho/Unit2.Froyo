const userInput = prompt('Enter a list of comma-separated froyo flavors');
const flavorCounter = (initialOrder) => {
  let orders = initialOrder.split(',');
  let finalCounter = {};
  for (let i = 0; i < orders.length; i++) {
    let currentOrder = orders[i];
    if (currentOrder in finalCounter) finalCounter[currentOrder]++;
    else finalCounter[currentOrder] = 1;
  }
  return finalCounter;
}
console.log(flavorCounter(userInput));