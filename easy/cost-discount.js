function rentalCarCost(d) {
  // store and set initial cost
  let cost = 40*d;
  
  // apply discount
  switch (d) {
      case 0:
      case 1:
      case 2:
          return cost;

      case 3:
      case 4:
      case 5:
      case 6:
          return cost-20;        
  
      default:
          return cost-50;        
  }
}

function rentalCarCost(d){
    // nested ternary
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);

//should have $20 discount
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);

//should have $40 discount
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);