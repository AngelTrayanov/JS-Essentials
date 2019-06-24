function solve(arr) {
    let currentSpeed = +arr[0];
    let location = arr[1];
    let topSpeed = 0;
    let diff = 0;
    let result = '';

    switch (location) {
        case 'motorway':
            topSpeed = 130;
            if (currentSpeed > topSpeed) {
                diff = currentSpeed - topSpeed;
                if (diff > 40) {
                    result = 'reckless driving';
                } else if (diff > 20) {
                    result = 'excessive speeding';
                } else {
                    result = 'speeding';
                }
            }
            break;
        case 'interstate':
            topSpeed = 90;
            if (currentSpeed > topSpeed) {
                diff = currentSpeed - topSpeed;
                if (diff > 40) {
                    result = 'reckless driving';
                } else if (diff > 20) {
                    result = 'excessive speeding';
                } else {
                    result = 'speeding';
                }
            }
            break;
        case 'city':
            topSpeed = 50;
            if (currentSpeed > topSpeed) {
                diff = currentSpeed - topSpeed;
                if (diff > 40) {
                    result = 'reckless driving';
                } else if (diff > 20) {
                    result = 'excessive speeding';
                } else {
                    result = 'speeding';
                }
            }
            break;
        case 'residential':
            topSpeed = 20;
            if (currentSpeed > topSpeed) {
                diff = currentSpeed - topSpeed;
                if (diff > 40) {
                    result = 'reckless driving';
                } else if (diff > 20) {
                    result = 'excessive speeding';
                } else {
                    result = 'speeding';
                }
            }
            break;
    }
    console.log(result);
}

solve([40, 'city']);
solve([200, 'motorway'] );