function solve(arr) {
    let resultArr = [];
    let currentNumber = 1;
    for(let command of arr){
        if (command == 'add') {
            resultArr.push(currentNumber)
        } else if (command == 'remove') {
            resultArr.pop(currentNumber);
        }
        currentNumber++;
    }
    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add',  

'add',  

'remove',  

'add',  

'add']  );