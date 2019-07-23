function getData() {

	let input = JSON.parse(document.querySelector('textarea').value);
	let pplIn = document.querySelector('#peopleIn p');
	let pplOut = document.querySelector('#peopleOut p');
	let blackList = document.querySelector('#blacklist p');

	let lastElement = input.pop();

	let inArr = [];
	let outArr = [];
	let listArr = [];
	for (let person of input) {
		let action = person.action;
		let currentName = {
			firstName: person.firstName,
			lastName: person.lastName
		};

		if (action === 'peopleIn') {
			if (!listArr.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
				inArr.push(currentName);
			}
		} else if (action === 'peopleOut') {
			if (inArr.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
				let index = inArr.findIndex(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName);
				inArr.splice(index, 1);
				outArr.push(currentName);
			}
		} else if (action === 'blacklist') {
			if (inArr.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
				let index = inArr.findIndex(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName);
				inArr.splice(index, 1);
				outArr.push(currentName); //maybe have to add it in listArr!
			}
			listArr.push(currentName);

		}
	}
	let output = {};
	output['peopleIn'] = inArr;
	output['peopleOut'] = outArr;
	output['blacklist'] = listArr;

	if (lastElement.action !== '' && lastElement.criteria !== '') {
		let criteria = lastElement.criteria;
		output[lastElement.action] = output[lastElement.action].sort((a, b) => a[criteria].localeCompare(b[criteria]));
	}

	pplIn.textContent = output.peopleIn.map(x => JSON.stringify(x)).join(' ');
	pplOut.textContent = output.peopleOut.map(x => JSON.stringify(x)).join(' ');
	blackList.textContent = output.blacklist.map(x => JSON.stringify(x)).join(' ');
}