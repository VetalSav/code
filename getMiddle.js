function getMiddle(s)
{
   return s.length % 2 == 0 ? s.slice(s.length/2-1,s.length/2-1+2)
                            : s[Math.floor( s.length/2)];
  //Code goes here!
}
console.log(getMiddle("A"))