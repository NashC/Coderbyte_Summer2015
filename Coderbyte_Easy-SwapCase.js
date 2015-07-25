//Coderbyte_Easy-SwapCase

function SwapCase(str) {
	str = str.split('');
	var arr = [];
	for (var i = 0; i<str.length; i++) {
		if(str[i].match(/[A-Z]/) !== null) {
			arr.push(str[i].toLowerCase());
		}
		else if(str[i].match(/[a-z]/) !== null) {
			arr.push(str[i].toUpperCase());
		}
		else {
			arr.push(str[i]);
		}
	}

	return arr.join('');
}

console.log(SwapCase('Hello World'));