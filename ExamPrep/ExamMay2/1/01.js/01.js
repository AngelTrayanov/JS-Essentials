function solve(days) {
    // Coffee - 40 mg caffeine per 100 ml
    // Coca Cola - 8 mg caffeine per 100 ml
    // Tea - 20 mg caffeine per 100 ml
    // Energy - 30 mg caffeine per 100 ml
     let caffeine = 0;
     for (let day = 1; day <= days; day++) {
         
        let coffeeCaf = ((3*150)/10)*4;
        let cocaCaf = ((2*250)/100)*8;
        let teaCaf = ((3*350)/100)*20;
        
        caffeine += (coffeeCaf + cocaCaf + teaCaf);
        //430 daily
        if (day % 5 === 0) {
            //energy 450
            let fifthDayExtra = ((3*500)/100)*30;
            
            caffeine += fifthDayExtra;
        }

        if (day % 9 === 0) {
            //coca
            let ninethDayExtraCoca = ((4*250)/100)*8;
            let ninethDayExtraEnergy = ((2*500)/100)*30;
            caffeine += ninethDayExtraCoca + ninethDayExtraEnergy;
        }
     }
     console.log(`${caffeine} milligrams of caffeine were consumed`);
    //     Every day 
    // in the morning he drinks 3 cups of coffee (150 ml per cup) 
    // at every lunch he drinks 2 bottles of coca cola (250 ml per bottle) 
    // at every brunch he drinks 3 cups of tea (350 ml per tea) 

    // Every 5th day he drinks 3 energy drinks (500 ml per can) on top

    // Every 9th day he drinks 4 bottles of coca cola and 2 energy drinks on top
}

solve(5);