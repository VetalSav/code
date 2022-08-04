function maxTriSum(numbers){
   return [...new Set(numbers)].sort((a,b) => b-a)
                            .slice(0, 3)
                            .reduce((summ,elem) => summ + elem);
  }
  console.log(maxTriSum([-3,-27,-4,-2,-27,-2]));

  