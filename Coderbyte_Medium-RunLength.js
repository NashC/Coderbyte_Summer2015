//Coderbyte_Medium-RunLength

function RunLength(str) {
	var output = [];
	var count = 1;

	for (var i = 1; i <= str.length; i++) {
		if (str[i] == str[i-1]) {
			count++;
		}
		else {
			output.push(count);
			output.push(str[i-1])
			count = 1;
		}
	}

	return output.join('');

}

console.log(RunLength('aabbcdeeeeeee'));