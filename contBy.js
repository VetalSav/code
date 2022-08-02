function countBy(x, n) {
    let z = [],
        i = 0;

        while(n){
            z.push(i+=x);
            n--;
            }
     return z;
  }
  countBy(2, 5);
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10];
//countBy(2,5) === [2,4,6,8,10];