//Coderbyte_Medium-GreatestCommonFactor

function Division(num1, num2) {
	var facts1 = [];
	var facts2 = [];

	//find factors for num1
	for (var i = 1; i <= num1; i++) {
		if(num1 % i === 0) {
			facts1.push(i);
		}
	}

	//find factors for num2
	for (var j = 1; j <= num2; j++) {
		if(num2 % j === 0) {
			facts2.push(j);
		}
	}

	//create array of common factors and then return max value of that array
	var commonFactors = [];
	for (var k = 0; k < facts1.length; k++) {
		for (var m = 0; m < facts2.length; m++) {
			if(facts1[k] == facts2[m]) {
				commonFactors.push(facts1[k]);
			}
		};
	};

	console.log(facts1);
	console.log(facts2);
	console.log(commonFactors);

	return commonFactors[commonFactors.length-1];
}

console.log(Division(8,2));