function solve(fundamentals, advanced, apps, type) {
    let courses = {
        'JS Fundamentals': 170,
        'JS Advanced': 180,
        'JS Apps': 190
    };
    let totalPrice = 0;

    if (fundamentals && advanced) {
        courses["JS Advanced"] *= 0.9;
    }
    if (fundamentals) {
        totalPrice += courses["JS Fundamentals"];
    }
    if (advanced) {
        totalPrice += courses["JS Advanced"];
    }
    if (apps) {
        totalPrice += courses["JS Apps"];
    }
    if (fundamentals && advanced && apps) {
        totalPrice = totalPrice * 0.94;
    }
    if (type === 'online') {
        totalPrice = totalPrice * 0.94;
    }
    console.log(totalPrice.toFixed()); //Math.round
}
solve(true, true, false, "onsite");