function findUniq(arr) {
let result = arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)).join();

  return +result;
  }
  console.log(typeof( findUniq([ 1, 1, 1, 2, 1, 1 ])));
 // [ 1, 1, 1, 2, 1, 1 ]
 