//Coderbyte_Medium-PrimeTime

function PrimeTime(num) {
	if (num <= 1) {
		console.log('Number is less than or equal to 1');
		return false;
	}

	var n = num - 1;

	function primeFind(int) {
		if (int == 1) {
			return true;
		}

		else if (((num / n) % 1) === 0) {
			console.log(int);
			return false;
		}
		else {
			console.log(n);
			n--;
			return primeFind(int-1);
		}
	}

	return primeFind(num-1)

}

console.log(PrimeTime(19));