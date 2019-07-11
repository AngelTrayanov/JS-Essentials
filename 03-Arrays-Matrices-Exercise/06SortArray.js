function solve(arr) {
    let sortedArr = arr.sort((a,b)=>{
        return a.length - b.length || a.localeCompare(b); // || a > b as second
    });
    console.log(sortedArr.join('\n'));
}

solve(['test',  

'Deny',  

'omen',  

'Default'] );