//Coderbyte_Easy-TimeConvert

function TimeConvert(num) {
	var mins = num % 60;
	var hrs = (num - mins) / 60;

	return hrs + ":" + mins;
}