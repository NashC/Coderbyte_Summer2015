//Coderbyte_Easy-ThirdGreatest

function ThirdGreatest(strArr) {
	var lengths = {};

	for (var i = 0; i<strArr.length; i++) {
		lengths[strArr[i]] = strArr[i].length;
	};

	var keysSorted = Object.keys(lengths).sort(function(a,b){return lengths[b]-lengths[a]})

	return keysSorted[2];
}

console.log(ThirdGreatest(["hello", "world", "before", "all"]))