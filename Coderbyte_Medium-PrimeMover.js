//Coderbyte_Medium-PrimeMover

function PrimeMover(num) {
	var set = {};
	var upLimit = 10000;
	
	//create object full of the numbers 2 thru the upper limit, all which have the value 'true' assigned to them
	for (var n = 2; n <= upLimit; n++) {
		set[n] = true;
	};

	//find all non-prime numbers less than the upper limit and set their value to 'false'
	for (var i = 2; i < Math.sqrt(upLimit); i++) {
		if (set[i] == true) {
			for (var j = (i*i); j <= upLimit; j+=i) {
			//	console.log(i + " " + j)
				set[j] = false;
			};
		}
	};

	//remove non-prime numbers from object to leave only the primes
	for (var k = 0; k <= upLimit; k++) {
		if (set[k] == false) {
			delete set[k];
		}
	}

	//convert the object of primes into an array of primes so I can access the num'th element to return for the answer
	var primeArr = Object.keys(set);


	return primeArr[num-1];
}

console.log(PrimeMover(4));