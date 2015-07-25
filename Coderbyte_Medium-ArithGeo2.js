//Coderbyte_Medium-ArithGeo2

function ArithGeoII(arr) {
		//Arithmetic
  	var arithDiff = Math.abs(arr[1] - arr[0]);
  	var arithCount = 0;
  	for (var i = 1; i<arr.length; i++) {	
      if (Math.abs(arr[i] - arr[i-1]) == arithDiff) {
      	arithCount += 1;
      }
    }
  	if(arithCount == arr.length-1) {
    	return 'Arithmetic';
    }

    //Geometric
  	var geoRatio = arr[1]/arr[0];
  	var geoCount = 0;
  	
  	for (var j = 1; j<arr.length; j++) {	
    	if (arr[j]/arr[j-1] == geoRatio) {
      		geoCount += 1;
      	}
    }
  	if(geoCount == arr.length-1) {
    	return 'Geometric';
    }

    return -1;     
}

console.log(ArithGeoII([-3,-4,-5,-6,-7]));