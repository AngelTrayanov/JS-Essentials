function solve(arr) {
    let steps = +arr.pop();
    steps = steps % 10; // or by length
    for (let i = 0; i < steps; i++) {

        let lastElement = arr.pop();
        arr.unshift(lastElement);

    }
    console.log(arr.join(' '));
}

solve(['1',

    '2',

    '3',

    '4',

    '2'
]);
// solve(['Banana',  

// 'Orange',  

// 'Coconut',  

// 'Apple',  

// '15'] );