function solve(input) {

    let moneyInATM = [];
    for (const action of input) {
        if (action.length > 2) {
            deposit(action);
        } else if (action.length === 2) {
            let personsBalance = action[0];
            let moneyToWithdraw = action[1];
            if (personsBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${personsBalance}$.`);
            } else {
                withdraw(personsBalance, moneyToWithdraw);
            }
        } else if (action.length === 1) {
            report(action[0]);
        }
    }

    function getSum(banknotes) {
        return banknotes.reduce((a, b) => a + b, 0);
    }

    function deposit(banknotes) {
        moneyInATM.push(...banknotes);
        console.log(`Service Report: ${getSum(banknotes)}$ inserted. Current balance: ${getSum(moneyInATM)}$.`);

    }

    function withdraw(personsBalance, moneyToWithdraw) {
        if (getSum(moneyInATM) < moneyToWithdraw) {
            console.log('ATM machine is out of order!');
        } else {
            moneyInATM = moneyInATM.sort((a, b) => b - a);
            let sum = 0;
            for (let i = 0; i < moneyInATM.length; i++) {
                if (moneyToWithdraw === sum) {
                    break;
                }
                if ((sum + moneyInATM[i]) <= moneyToWithdraw) {
                    sum += +moneyInATM.splice(i,1);
                    i--;
                }
            }
            console.log(`You get ${sum}$. Account balance: ${personsBalance - moneyToWithdraw}$. Thank you!`);
        }
    }

    function report(banknote) {
        let count = moneyInATM.filter(x => x === banknote).length;
        console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`);
    }
}

solve([
    [20, 5, 100, 20, 1],

    [457, 25],

    [1],

    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],

    [20, 85],

    [5000, 4500],

]);