//Coderbyte_Medium-PalindromTwo

function PalindromeTwo(str) {
	str = str.match(/\w/gi).join('').toLowerCase();
	console.log(str);

	for (var i = 0; i < str.length/2; i++) {
		if (str[i] != str[str.length-1-i]) {
			console.log(i);
			return false;
		}
	};


	return true;
}

console.log(PalindromeTwo('A war at Tarawa!'));