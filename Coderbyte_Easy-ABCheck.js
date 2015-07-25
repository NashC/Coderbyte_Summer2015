//Coderbyte_Easy-ABCheck

function ABCheck(str) {
	
	for(var = 0; i < str.length; i++) {
		if (str[i] == 'a' && str[i+4] == 'b') {
			return true;
		}
	}

	return false;
}