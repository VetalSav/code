function fakeBin(x){
return [...x].map((value) => value<5?value=0:1).join("");
}
console.log(fakeBin('45385593107843568'));
//assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');