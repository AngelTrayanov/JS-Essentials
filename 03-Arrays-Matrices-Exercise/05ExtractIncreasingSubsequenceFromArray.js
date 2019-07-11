function solve(arr) {
    let resultArr = [];
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    
    for(let num of arr){
        let current = +num;
        if (current >= currentBiggest) {
            resultArr.push(current);
            currentBiggest = current;
        }
    }
    console.log(resultArr.join('\n'));
}

solve([1,  

    3,  
    
    8,  
    
    4,  
    
    10,  
    
    12,  
    
    3,  
    
    2,  
    
    24] );