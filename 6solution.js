function solution(str){
   let lengthStr = str.length,
       result = [];
   if(lengthStr%2){

        for(let i=0; i<lengthStr-2;i++){
        result.push(str[i]+str[i+1]);
        i++;
}
result.push(str[lengthStr-1]+"_"); 
}else{
    for(let i=0; i<lengthStr;i++){
        result.push(str[i]+str[i+1]);
        i++;}
}
   return result;
}
const solution2 = str => ((str+"_").match(/../g)||[]);
console.log(solution(""));
//assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);