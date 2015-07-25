//Coderbyte_Easy-FirstFactorial

function FirstFactorial(num) {
	var arr = [];
	for (var i = 1; i <= num; i++) {
		arr.push(i);
	}
	num = arr.reduce (function(total, n) {
		return total *= n;
	});
	return num;
}

console.log(FirstFactorial(4));