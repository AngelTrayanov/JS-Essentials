function magicMatrices(arr) {
    let matrix = arr.slice(0);
    
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    let colsSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    let isTrue = true;

    for (let row = 0; row < matrix.length; row++) {
        for (let cols = 0; cols < matrix[row].length; cols++) {
            if (rowSum[row] !== colsSum[cols]) {
                isTrue = false;
                break;
            }
        }
    }
    console.log(isTrue);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);