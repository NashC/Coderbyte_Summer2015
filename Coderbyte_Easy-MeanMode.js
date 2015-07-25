//Coderbyte_Easy-MeanMode

function MeanMode(arr) {
  var mean = arr.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  })/arr.length;
  
  var counts = {};
  
  for (var i = 0; i<arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  var mode = Object.keys(counts).reduce(function(a, b){ return counts[a] > counts[b] ? a : b });
  
  return mode == mean ? 1 : 0;
}

console.log(MeanMode([4,4,4,6,2]));