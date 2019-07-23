function solve(passPerWagon, wagonsArr) {
    let allowedSpace = passPerWagon;
    let toTransfer = 0;
    let resultArr = [];
    for (let i = 0; i < wagonsArr.length; i++) {
        let current = wagonsArr[i];
        current += toTransfer;
        if (current >= allowedSpace) {
            toTransfer = (current - allowedSpace);
            resultArr.push(allowedSpace);
        } else{
            resultArr.push(current);
            toTransfer = 0;
        }
    }
    if (toTransfer!==0) {
        console.log(resultArr);
        console.log(`Could not fit ${toTransfer} passengers`);
    } else {
        console.log(resultArr);
        console.log('All passengers aboard');
    }
}

solve(10, [9, 39, 2, 0, 0]);
solve(6, [5, 15, 2]);