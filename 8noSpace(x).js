function noSpace(x){
return x.split(" ").join("")
}
const noSpacei = x => x.replace(/ /g, "");
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
//assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');