function arrayDiff(a, b) {
    //An array to store unmatched values
    let unmatched = [...a];
    //Read each [b] vals and
    b.forEach(y => {
        for(let i = unmatched.length-1; i > -1; i--) {
            if(y==unmatched[i]){
                //remove matched values
                unmatched.splice(i, 1);
            }
        }
    });
    
    //send passed vals
    return unmatched;
}

function arrayDiff(a, b){
    //simple filter
    return a.filter(val => !b.includes(val));
}

console.log(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
console.log(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")