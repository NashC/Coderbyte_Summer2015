//Coderbyte_Easy-AdditivePersistence

function AdditivePersistence(num) {
	var count = 0;
	if (num.toString().length == 1) {return count;}

	function addPer(x) {
		var numArr = x.toString().match(/\d/g).map(function(a) {return parseInt(a);});
		var sum = numArr.reduce(function(a,b) {return a+b;});
		count += 1;
		if (sum.toString().length > 1) {

		    return addPer(sum);
		}
		else {
		    return count;
	    }
	}
	
	return addPer(num);
}

console.log(AdditivePersistence(4673));
