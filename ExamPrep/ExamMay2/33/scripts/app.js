function spaceshipCrafting() {

	let titaniumCore = document.getElementById('titaniumCoreFound').value;
	let aluminiumCore = document.getElementById('aluminiumCoreFound').value;
	let magnesiumCore = document.getElementById('magnesiumCoreFound').value;
	let carbonCore = document.getElementById('carbonCoreFound').value;
	let lossesPercent = document.getElementById('lossesPercent').value;

	let procentagePerCore = (lossesPercent / 4) / 100;

	let titaniumBars = Math.round((titaniumCore * (1 - procentagePerCore)) / 25);
	let aluminiumBars = Math.round((aluminiumCore * (1 - procentagePerCore)) / 50);
	let magnesiumBars = Math.round((magnesiumCore * (1 - procentagePerCore)) / 75);
	let carbonBars = Math.round((carbonCore * (1 - procentagePerCore)) / 100);

	let bars = {
		titaniumBars,
		aluminiumBars,
		magnesiumBars,
		carbonBars
	}
	let spaceShipsTotal = {
		undefo: 0,
		ziro: 0,
		jason: 0,
		folse: 0
	};
	//7 titanium bars, 9 aluminum bars, 7 magnesium bars, 7 carbon bars 
	while (bars.titaniumBars > 1 && bars.aluminiumBars > 1 && bars.magnesiumBars > 2 && bars.carbonBars > 0) {
		if (bars.titaniumBars >= 7 && bars.aluminiumBars >= 9 && bars.magnesiumBars >= 7 && bars.carbonBars >= 7) {
			bars.titaniumBars -= 7;
			bars.aluminiumBars -= 9;
			bars.magnesiumBars -= 7;
			bars.carbonBars -= 7;
			spaceShipsTotal.undefo += 1;
		}
		//5 titanium bars, 7 aluminum bars, 7 magnesium bars, 5 carbon bars 
		if (bars.titaniumBars >= 5 && bars.aluminiumBars >= 7 && bars.magnesiumBars >= 7 && bars.carbonBars >= 5) {
			bars.titaniumBars -= 5;
			bars.aluminiumBars -= 7;
			bars.magnesiumBars -= 7;
			bars.carbonBars -= 5;
			spaceShipsTotal.ziro += 1;
		}
		//3 titanium bars, 5 aluminum bars, 5 magnesium bars, 2 carbon bars 
		if (bars.titaniumBars >= 3 && bars.aluminiumBars >= 5 && bars.magnesiumBars >= 5 && bars.carbonBars >= 2) {
			bars.titaniumBars -= 3;
			bars.aluminiumBars -= 5;
			bars.magnesiumBars -= 5;
			bars.carbonBars -= 2;
			spaceShipsTotal.jason += 1;
		}
		//2 titanium bars, 2 aluminum bars, 3 magnesium bars, 1 carbon bar 
		if (bars.titaniumBars >= 2 && bars.aluminiumBars >= 2 && bars.magnesiumBars >= 3 && bars.carbonBars >= 1) {
			bars.titaniumBars -= 2;
			bars.aluminiumBars -= 2;
			bars.magnesiumBars -= 3;
			bars.carbonBars -= 1;
			spaceShipsTotal.folse += 1;
		}
	}

	let paragraphs = document.getElementsByTagName('p');
	let barsPara = paragraphs[0];
	let shipsPara = paragraphs[1];

	let resultShips = [];
	//console.log(spaceShipsTotal);
	for (const key in spaceShipsTotal) {
		if (spaceShipsTotal[key] !== 0) {
			if (key === 'undefo') {
				resultShips.push(`${spaceShipsTotal[key]} THE-UNDEFINED-SHIP`);
			} else if (key === 'ziro') {
				resultShips.push(`${spaceShipsTotal[key]} NULL-MASTER`);
			} else if (key === 'jason') {
				resultShips.push(`${spaceShipsTotal[key]} JSON-CREW`);
			} else if (key === 'folse') {
				resultShips.push(`${spaceShipsTotal[key]} FALSE-FLEET`);
			}
		}
	}
	shipsPara.textContent = resultShips.join(', ');
	let resultBars = [];
	for (const bar in bars) {
		if (bar === 'titaniumBars') {
			resultBars.push(`${bars[bar]} titanium bars`);
		} else if (bar === 'aluminiumBars') {
			resultBars.push(`${bars[bar]} aluminum bars`);	
		} else if (bar === 'magnesiumBars') {
			resultBars.push(`${bars[bar]} magnesium bars`);
		} else if (bar === 'carbonBars') {
			resultBars.push(`${bars[bar]} carbon bars`);
		}
		
	}
	barsPara.textContent = resultBars.join(', ');

}