function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? (Math.floor(Math.sqrt(sq))+1) **2 : -1;
  }
  console.log(findNextSquare(155));
  console.log(Number.isInteger(Math.sqrt(153)));