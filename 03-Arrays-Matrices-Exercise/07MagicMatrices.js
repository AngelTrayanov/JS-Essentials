function solve(matrix) {
    let isMagic = true;
    let colChecker = 0;
    let rowChecker = 0;
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        let colSum = 0;
        
        for (let col = 0; col < matrix[row].length; col++) {
            
            colSum += matrix[col][row];
            rowSum += matrix[row][col];
            
        }
        if (row == 0) {
            colChecker = colSum;
            rowChecker = rowSum;
        } else{
            if ((colChecker !== colSum) && (rowChecker !== rowSum)) {
                isMagic = false;
            }
        }
        if (!isMagic) {
            break;
        }
    }
    console.log(isMagic);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
solve([[11, 32, 45], 

    [21, 0, 1], 
   
    [21, 1, 1]] )