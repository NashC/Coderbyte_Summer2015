//Coderbyte_Easy-NumberAddition

function NumberAddition(str) {
	var numArr = str.match(/\d+/g);
	return numArr.reduce(function(a,b) {
		return parseInt(a) + parseInt(b);
	})
}

console.log(NumberAddition('75Number9'));