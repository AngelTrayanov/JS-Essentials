function solve() {
	let input = document.getElementById('input').value;
	let inputValue = input.split('').map(Number).reduce((a, b) => a + b);
	let toCut = inputValue;
	while (toCut > 9) {
		toCut = toCut.toString().split('').map(Number).reduce((a, b) => a + b);
	}
	input = input.substring(toCut, input.length - toCut);
	let toPrint = '';
	for (let i = 0; i < input.length; i += 8) {
		let asccii = input.substr(i, 8);
		asccii = parseInt(asccii, 2);
		letter = String.fromCharCode(asccii);
		let approved = letter.match(/[a-z|A-Z ]/g);
		if (approved) {
			toPrint += letter;
		}
	}
	let result = document.getElementById('resultOutput');
	result.innerHTML = toPrint;
}