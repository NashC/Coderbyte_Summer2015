//Coderbyte_Easy-SimpleSymbols

function SimpleSymbols (str) {
	var ltrArr = str.split('');

	for (var i = 0; i < ltrArr.length; i++) {
		if (ltrArr[i].match(/[a-z]/gi) !== null) {
			return (ltrArr[i-1] == '+' && ltrArr[i+1] == '+');
		}
	}
}

console.log(SimpleSymbols('+d+=3=+s+'));
console.log(SimpleSymbols('f++d+'));