//Coderbyte_Easy-LetterCapitalize

function LetterCapitalize(str) {
	var wordArr = str.split(' ');
	for (var i = 0; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
	}
	return wordArr.join(' ');
}

console.log(LetterCapitalize('hello world'));