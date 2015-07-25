//Coderbyte_Easy-LetterChanges
//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
	var ltrs = "abcdefghijklmnopqrstuvwxyz";
	var ltrArr = ltrs.split('');
	var vowels = 'aeiou';
	var vowelArr = vowels.split('');
	var strArr = str.toLowerCase().split('');
	var newStr = [];

	for (var i = 0; i < strArr.length; i++) {
		for (var j = 0; j < ltrArr.length-1; j++) {
			if (strArr[i] == ltrArr[j]) {
				for (var n = 0; n < vowelArr.length; n++) {
				    if (ltrArr[j+1] == vowelArr[n]) {
				        newStr.push(vowels.toUpperCase().split('')[n]);
				    }
				}
				if (newStr.length != (i+1)) {    
			        newStr.push(ltrArr[j+1]);
				}
				    
		    	
			}
			else if (strArr[i] == ltrArr[ltrArr.length-1]) {
			    newStr.push(vowels.toUpperCase().split('')[0]);
			    break;
			}
		}	
		if (newStr.length != (i + 1)) {
		    newStr.push(strArr[i]);
	    }
	}

	str = newStr.join('');
	return str;
}

console.log(LetterChanges('fun times!'));

