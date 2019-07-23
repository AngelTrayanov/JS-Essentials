function coffeeStorage() {

    let textarea = JSON.parse(document.querySelector('textarea').value);
    let [report, inspection] = document.getElementsByTagName('p');

    let brands = {};

    for (let tokens of textarea) {
        let [command, brand, subBrand, date, quantity] = tokens.split(', ');
        quantity = +quantity;
        if (command === 'IN') {
            if (!brands[brand]) {
                brands[brand] = {};
            }
            if (!brands[brand][subBrand]) {
                brands[brand][subBrand] = {
                    date,
                    quantity
                };
            }
            if (brands[brand][subBrand].date === date) {
                brands[brand][subBrand] = {
                    date,
                    quantity
                };
            }
            if (brands[brand][subBrand].date < date) {
                brands[brand][subBrand] = {
                    date,
                    quantity
                };
            }
        } else if (command === 'OUT') {
            if (brands[brand] &&
                brands[brand][subBrand] &&
                brands[brand][subBrand].date > date &&
                brands[brand][subBrand].quantity >= quantity) {
                brands[brand][subBrand].quantity -= quantity;
            }
        } else if (command === 'REPORT') {
            Object.entries(brands).forEach(([brand, subBrand])=>{
                let arr = [];
                Object.entries(subBrand).map(([name, information])=>{
                    arr.push(`${name} - ${information.date} - ${information.quantity}.`);
                });
                report.innerHTML += `${brand}: ${arr.join(' ')}` + '<br/>';
            });
        } else if (command === 'INSPECTION') {
            Object.entries(brands)
            .sort((a,b)=>a[0].localeCompare(b[0]))
            .forEach(([brand, subBrand])=>{
                let arr = [];
                Object.entries(subBrand)
                .sort((a,b)=>b[1].quantity - a[1].quantity)
                .forEach(([name, information])=>{
                    arr.push(`${name} - ${information.date} - ${information.quantity}.`);
                });
                inspection.innerHTML += `${brand}: ${arr.join(' ')}` + '<br/>';
            });

        }
    }
}