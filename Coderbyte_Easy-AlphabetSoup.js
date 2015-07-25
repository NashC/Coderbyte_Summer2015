//Coderbyte_Easy-AlphabetSoup

function AlphabetSoup(str) {
	var charcodes = [];
	var string = '';

	for (var i = 0; i < str.length; i++) {
		charcodes.push(str.charCodeAt(i));
	}

    charcodes.sort(function(a,b) {return a-b;});

    charcodes.map(function(num) {
        string += String.fromCharCode(num);
        return string;
    });
    
    return string;
}

console.log(AlphabetSoup('hello'));