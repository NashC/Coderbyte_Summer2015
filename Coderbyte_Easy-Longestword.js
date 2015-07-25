//Coderbyte_Easy-LongestWord
//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
	var alphabet = "abcdefghijklmnopqrstuvwxyz ".split("");
  	var arr = [];
	arr = sen.toLowerCase().split("");
	arr = arr.filter(function (entry) {
	    for (var i = 0; i < alphabet.length; i++) {
	        if (entry == alphabet[i]) {
	            return entry;
	        }
	    }
	});
    arr = arr.join("").split(" ").sort(function(a, b){return b.length-a.length});
    sen = arr[0];
	return sen; 
         
}