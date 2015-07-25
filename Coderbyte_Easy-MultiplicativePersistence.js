//Coderbyte_Easy-MultiplicativePersistence

function MultiplicativePersistence(num) {
	var count = 0;
	if (num.toString().length == 1) {return count;}

	function multiPer(x) {
		var numArr = x.toString().match(/\d/g).map(function(a) {return parseInt(a);});
		var sumProd = numArr.reduce(function(a,b) {return a*b;});
		count += 1;
		if (sumProd.toString().length > 1) {

		    return multiPer(sumProd);
		}
		else {
		    return count;
	    }
	}
	
	return multiPer(num);
}

console.log(MultiplicativePersistence(39));