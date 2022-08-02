

 
  function duplicateCount (str) {
    let result = [],
        resultDuble = [];
        
        str.toLowerCase()
                .split("")
                .map((value, index, array) => 
                {result.includes(value)?resultDuble.push(value): result.push(value); });
    
        return [...new Set(resultDuble)].length;
  }

  
  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
  console.log(duplicateCount("Indivisibilities"));     