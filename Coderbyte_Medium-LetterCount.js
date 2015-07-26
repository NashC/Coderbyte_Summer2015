//Coderbyte_Medium-LetterCount

function LetterCount(str) {
	str = str.match(/[A-Za-z]|\s/g).join('');
	strArr = str.toLowerCase().split(' ')
	var topCount = 1;
	var topWord = -1;

	for (var i = 0; i < strArr.length; i++) {
		var localCount = 1;
		for (var j = 0; j < strArr[i].length; j++) {
			for (var k = j+1; k < strArr[i].length; k++) {
				if (strArr[i][j] == strArr[i][k]) {
					localCount += 1;
				}
			}
			if (localCount > topCount) {
				topWord = i;
				topCount = localCount;
			}
		}
	};

	return topWord >= 0 ? str.split(' ')[topWord] : topWord;

}

console.log(LetterCount('Today, is the greatest day ever!'))