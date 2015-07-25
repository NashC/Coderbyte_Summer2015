//Coderbyte_Easy-ExOh

function ExOh(str) { 
	var countX = 0;
  	var countO = 0;
  
  	for(var i = 0; i < str.length; i++) {
    	if (str[i] == 'x') {
        	countX += 1;
        }
        else if (str[i] == 'o') {
        	countO += 1;
        }
    }
  
  	if (countX == countO) {
    	return true;
    }
  	
    return false;     
}