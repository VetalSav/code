function minValue(values){
    return [... new Set(values)].sort().join('');
  }
  console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
  //assert.strictEqual(minValue([4, 7, 5, 7]), 457);
  //   assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);Form The Minimum