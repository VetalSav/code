function min(arr, toReturn) {
    
    let minValue,
     minValueIndex;

    minValue = arr.slice().sort((a,b)=>a-b)[0];
    minValueIndex = arr.indexOf(minValue);
    
    return toReturn === 'index' ?  minValueIndex : minValue;
 
  }
console.log(min([7,2,9,0,3,4,5], 'index'));
  //Test.assertEquals(min([1,2,3,4,5], 'value'), 1)
//Test.assertEquals(min([1,2,3,4,5], 'index'), 0)
console.log([1,2,0,3,4,5].indexOf(0));
console.log(0===0);