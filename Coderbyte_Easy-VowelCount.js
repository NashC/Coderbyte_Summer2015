//Coderbyte_Easy-VowelCount

function VowelCount(str) {
	var arr = str.match(/[a,e,i,o,u]/gi)
	return arr.length;
}