//Coderbyte_Easy-WordCount

function WordCount(str) { 
	var count = 1;
  
  	for(var i = 0; i<str.length;i++) {
    	if (str[i] == ' ') {
        	count += 1;
        }
    }

	return count;
}