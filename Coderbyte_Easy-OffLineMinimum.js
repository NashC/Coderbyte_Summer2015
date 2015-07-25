//Coderbyte_Easy-OffLineMinimum

function OffLineMinimum(strArr) {
	var finalArr = [];
	var arr = [];
	for (var i = 0; i < strArr.length; i++) {
		arr.sort(function(a,b) {return a-b;})
		if (strArr[i] == 'E') {
			finalArr.push(arr.shift());
		}
		else {
			arr.push(strArr[i]);
		}
	};

	return finalArr.join(',');
}

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));