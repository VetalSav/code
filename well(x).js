function well(x){
let count =  x.filter(value => value ==='good').length;
console.log(count);
return (count === 1) ? 'Publish!' : (count > 1) ?'I smell a series!' : 'Fail!';
       
}
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));