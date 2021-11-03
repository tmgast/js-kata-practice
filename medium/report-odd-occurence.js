function findOdd(A) {
  //A place to store occurence counts
  let agg = {};

  //iterate over array and
  for(let i=0; i<A.length;i++){
    //create an entry if not preset
    agg[A[i]] = agg[A[i]]+1 || 1 ;
  }

  //return odd result
  return filterObj(agg);
}

function filterObj(obj){
  let keys = Object.keys(obj);
  for(let key of keys){
    if(obj[key]%2!=0)
      return parseInt(key);
  }

  return false;
}


//XOR use-case for bitwise, limited to arrays with even occurences except a single number
function findOdd(A){
  return A.reduce((a,b) => a ^ b);
}

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  console.log(findOdd(a));
}

doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
doTest([10], 10);
doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
doTest([5,4,3,2,1,5,4,3,2,10,10], 1);