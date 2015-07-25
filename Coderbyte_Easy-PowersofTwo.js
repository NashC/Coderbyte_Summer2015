//Coderbyte_Easy-PowersofTwo

function PowersofTwo(num) {
	if (num == 2) {
		return 'true';
	}
	else if (num % 2 !== 0) {
		return 'false';
	}
	else {
		return PowersofTwo(num/2);
	}
}

console.log(PowersofTwo(32));
