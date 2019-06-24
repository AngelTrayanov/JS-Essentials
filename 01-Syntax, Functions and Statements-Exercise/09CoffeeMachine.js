function solve(arr) {
    let income = 0;
    for(let line of arr){
        let drinkPrice = 0;
        let tokens = line.split(', ');
        let coinsInserted = tokens[0];
        let typeOfDrink = tokens[1];
        if (typeOfDrink == 'coffee') {
            let caffeineOrDecaff = tokens[2];
            if (caffeineOrDecaff == 'caffeine') {
                drinkPrice += 0.8;
                if (!Number.isInteger(tokens[3])) {
                    let milkPrice = Number((drinkPrice*0.1).toFixed(1));
                    drinkPrice += milkPrice;
                    if (tokens[4] > 0) {
                        drinkPrice += 0.1;
                    }
                } else {
                    if (tokens[3] > 0) {
                        drinkPrice += 0.1;
                    }
                }
            } else{
                drinkPrice += 0.9;
                if (!Number.isInteger(+tokens[3])) {
                    let milkPrice = Number((drinkPrice*0.1).toFixed(1));
                    drinkPrice += milkPrice;
                    if (tokens[4] > 0) {
                        drinkPrice += 0.1;
                    }
                } else {
                    if (tokens[3] > 0) {
                        drinkPrice += 0.1;
                    }
                }
            }
            
        } else if (typeOfDrink == 'tea') {
            drinkPrice += 0.8;
            if (!Number.isInteger(tokens[2])) {
                let milkPrice = Number((drinkPrice*0.1).toFixed(1));
                drinkPrice += milkPrice;
                if (tokens[3] > 0) {
                    drinkPrice += 0.1;
                }
            } else {
                if (tokens[2] > 0) {
                    drinkPrice += 0.1;
                }
            }
        }
        
        if (coinsInserted >= drinkPrice) {
            let extra = coinsInserted - drinkPrice;
            console.log(`You ordered ${typeOfDrink}. Price: $${drinkPrice.toFixed(2)} Change: $${extra.toFixed(2)}`);
            income += drinkPrice;
        } else {
            let diff = drinkPrice - coinsInserted;
            console.log(`Not enough money for ${typeOfDrink}. Need $${diff.toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${income.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);