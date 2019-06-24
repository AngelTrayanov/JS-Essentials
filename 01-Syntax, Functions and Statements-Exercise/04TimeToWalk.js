function solve(steps, footprintLength, speed) {
    let distance = steps * footprintLength;
    let breaksTimeInSeconds = (Math.floor(distance / 500)) * 60;
    let speedInMetersPerSecond = ((speed * 1000) / 60) / 60;
    let seconds = (distance / speedInMetersPerSecond) + breaksTimeInSeconds;

    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = Math.ceil(seconds % 60);
    
    let toPrint = '';

    if (hours < 10) {
        toPrint += '0' + hours + ':';
    } else {
        toPrint += hours + ':';
    }
    if (minutes < 10) {
        toPrint += '0' + minutes + ':';
    } else {
        toPrint += minutes + ':';
    }
    if (seconds < 10) {
        toPrint += '0' + seconds;
    } else {
        toPrint += seconds;
    }
    console.log(toPrint);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);