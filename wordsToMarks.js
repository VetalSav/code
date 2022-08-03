function wordsToMarks(string){
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    let result =0;
    for(let i=0; i<string.length;i++){
      for(j=0;j<arr_en.length;j++){
        if(string[i]===arr_en[j]){
        result+=arr_num[j];
        }
      }
    }
     return result;   
  }
    //f + r + i + e + n + d + s + h + i + p = 108

console.log(wordsToMarks("attitude"));