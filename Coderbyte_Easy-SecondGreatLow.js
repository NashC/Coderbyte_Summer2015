//Coderbyte_Easy-SecondGreatLow

function SecondGreatLow(arr) { 
	arr = arr.sort(function(a,b) {return a-b;});
    
    for(var i = 0; i<arr.length; i++) {
    	if (arr[i] == arr[i+1]) {
        	arr.splice(i,1);
        }
    }
    
    return arr[1] + " " + arr[arr.length-2];
}

console.log(SecondGreatLow([4,90]));