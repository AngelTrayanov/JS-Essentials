function solve(arr) {
    let ourNumber = +arr[0];
    for (let i = 1; i < arr.length; i++) {

        let command = arr[i];
        switch (command) {
            case 'chop':
                ourNumber /= 2;
                break;
            case 'dice':
                ourNumber = Math.sqrt(ourNumber);
                break;
            case 'spice':
                ourNumber += 1;
                break;
            case 'bake':
                ourNumber *= 3;
                break;
            case 'fillet':
                ourNumber = ourNumber * 0.8;
                break;
        }
        console.log(ourNumber);
    }
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);