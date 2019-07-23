function solve(input) {
    let income = 0;
    for (const order of input) {
        let price = 0.80;
        let tokens = order.split(', ');
        let coinsInserted = tokens[0];
        let drink = tokens[1];
        if (drink === 'coffee') {
            let typeOfCoffee = tokens[2];
            if (typeOfCoffee === 'decaf') {
                price += 0.1;
            }
            if (isNaN(tokens[3])) {
                price += +((price*0.1).toFixed(1));
                if (+tokens[4]>0) {
                    price += 0.1;
                }
            }else{
                if (+tokens[3]>0) {
                    price += 0.1;
                } 
            }
        } else if (drink === 'tea') {
            if (isNaN(tokens[2])) {
                price += +((price*0.1).toFixed(1));
                if (+tokens[3]>0) {
                    price += 0.1;
                }
            }else{
                if (+tokens[2]>0) {
                    price += 0.1;
                } 
            }
        }
        if (price <= coinsInserted) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(coinsInserted-price).toFixed(2)}$`);
            income += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(price-coinsInserted).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${income.toFixed(2)}$ `);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', 

'1.00, coffee, decaf, 0']   );