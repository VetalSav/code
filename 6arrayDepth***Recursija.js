
const arrayDepth = arr =>
Array.isArray(arr)
  ? 1 + Math.max(0, ...arr.map(arrayDepth))
  : 0;


  

console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]));
//Test.assertEquals(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]), 6)