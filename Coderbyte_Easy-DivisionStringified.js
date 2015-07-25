//Coderbyte_Easy-DivisionStringified

function DivisionStringified(num1, num2) {
  var arr = Math.round(num1/num2).toString().split('');
  var newArr = [];
  var count = 1;
  
  for (var i = arr.length-1; i >= 0; i--) {
    if (count % 4 !== 0) {
      newArr.unshift(arr[i]);
      count++;
    }
    else {
      newArr.unshift(',');
      newArr.unshift(arr[i]);
      count = 2;
    }
  }
  
  return newArr.join('');
}

console.log(DivisionStringified(5000000000000,2));