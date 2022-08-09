function arrAdder(arr) {
    let result =[];
    
    for(let i = 0; i<arr[0].length; i++){

        result[i] = arr.map(value =>  value[i]);
        }
    
    
    return `${result.map(value =>value !=="" ? value.join(""):0).join(" ")}`;
   }

   