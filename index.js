const userInput = prompt('Enter a list of comma-separated froyo flavors');
const makeClean = (str) => {
  let arr = str.split(',');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let currentOrder = arr[i];
    if (currentOrder in obj) obj[currentOrder]++;
    else obj[currentOrder] = 1;
  }
  return obj;
}
console.log(makeClean(userInput));