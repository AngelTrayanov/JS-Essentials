function solve(num) {
    let asString = num.toString();
    let checker = asString[0];
    let sum = +checker;
    let isTrue = true;
    for (let i = 1; i < asString.length; i++) {
        if (checker != asString[i]) {
            isTrue = false;
        }
        checker = asString[i];
        sum += +checker;
    }
    console.log(isTrue);
    console.log(sum);
}

solve(2222222);
solve(1234);