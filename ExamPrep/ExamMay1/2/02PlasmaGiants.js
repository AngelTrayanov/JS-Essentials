function solve(arr, cutSize) {

    //First, you have to cut the array into 2 equal pieces.
    let firstPart = arr.slice(0, (arr.length) / 2);
    let secondPart = arr.slice((arr.length) / 2, arr.length);
    //create giants and reduce arr to one sum
    let giantOne = 0;
    let giantTwo = 0;

    while ((firstPart.length > 0) && (secondPart.length > 0)) {
        giantOne += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
        giantTwo += secondPart.splice(0, cutSize).reduce((a, b) => a * b);
    }

    let onhitDamage = Math.min(...arr);
    let endOfFight = Math.max(...arr);
    let rounds = 1;
  
    if (onhitDamage !== 0) {
        while ((giantOne > endOfFight) && (giantTwo > endOfFight)) {
            giantOne -= onhitDamage;
            giantTwo -= onhitDamage;
            rounds++;
        }
    }
    if (giantOne === giantTwo) {
        console.log(`Its a draw ${giantOne} - ${giantTwo}`);
    } else if (giantOne > giantTwo) {
        console.log(`First Giant defeated Second Giant with result ${giantOne} - ${giantTwo} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${giantTwo} - ${giantOne} in ${rounds} rounds`);
        
    }
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);