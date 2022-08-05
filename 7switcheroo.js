function switcheroo(x){
    if(x){
        return [...x].map((value) => value=="a" ? "b": value == "b"? "a":value).join("");}
}
console.log(switcheroo());
