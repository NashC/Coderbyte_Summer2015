//Coderbyte_Medium-BinaryConverter

function BinaryConverter(str) {
	var total = 0;
	var binValue = 1;

	for(var i = str.length-1; i>=0; i--) {
		total += (str[i] * binValue);
		binValue *= 2;
	}

	return total;
}

console.log(BinaryConverter('101'));