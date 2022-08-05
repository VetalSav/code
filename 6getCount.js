function getCount(str) {
    let count = 0;
    str.split("")
    .map((value) => {(value==="a"||value==="e"||value==="i"||value==="o"||value==="u")?count++:0});
    return count;
  }
  console.log(getCount("abracadabra"))
 // a, e, i, o, u 
  //assert.strictEqual(getCount("abracadabra"), 5) ;