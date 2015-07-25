//Coderbyte_Easy-LetterCountI

function LetterCountI(str) {
	str = str.toLowerCase().split(' ');
	var topWord = 0;
    var topRepeats = 0;

	for (var i = 0; i < str.length; i++) {
		var localRepeats = 0;
		for (var j = 0; j < str[i].length; j++) {
		    var ltrCount = 0;
			for (var k = j+1; k < str[i].length; k++) {
				
				if (str[i][j] == str[i][k]) {
					ltrCount += 1;
				}
				if (ltrCount > topRepeats) {
				    localRepeats = ltrCount;
			    }
			}

		}
		if (localRepeats > topRepeats) {
		    topRepeats = localRepeats;
		    topWord = i;
		}
	}

   return topRepeats > 0 ? str[topWord] : -1;
}

console.log(LetterCountI('Today, is the greatest day ever!'));