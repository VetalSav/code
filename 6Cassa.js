function queueTime(customers, n) {
    let custosLength = customers.length,
        cassa=[];
     if(custosLength===0){
         return 0;
        }
    else if(custosLength < n){
       return Math.max(...customers);
        }
    else {

        for(let j=0; j<n; j++){
            cassa.push(customers[j]);
            console.log(cassa);
        }
        for(let i=n; i<custosLength; i++){
            cassa.sort((a, b) => a-b);
            cassa[0] = cassa[0] + customers[i];
            console.log(cassa);
  }
        }
       
    return Math.max(...cassa);
}
//best
function queueTime1(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }
console.log(queueTime([28,6,32,12,37,32,12,17,41,48,49,47,16,27,17,11],4));


//Wrong answer for customers = [11,8,7,13,15,12,15,4,15,2,10,19,14,5,15,2,10,5,7,16,18,6,12,20,3,16,2,14,10,20,10,18,15,12,16,12,5,7,11,4,10] and n = 4 - Expected: 116, instead got: 112