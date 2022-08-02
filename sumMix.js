function sumMix(x){
return x.map((value) => +value).reduce((sum, elem) => sum + elem);
} 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));