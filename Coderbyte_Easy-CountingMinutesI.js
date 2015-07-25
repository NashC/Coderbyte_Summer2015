//Coderbyte_Easy-CountingMinutesI

function CountingMinutesI(str) {
  arr = str.split('-');
  
  arr.forEach(function(element, index) {
    if (element.length == 6) {
      arr[index] = '0' + element;
    }
    
    if(arr[index].substr(-2, 2) == 'pm' && arr[index].substr(0,2) != '12') {
      arr[index] = (parseInt(arr[index].substr(0,2)) + 12).toString() + arr[index].slice(2);
    }
    
    if(arr[index].substr(-2, 2) == 'am' && arr[index].substr(0,2) == '12') {
      arr[index] = (parseInt(arr[index].substr(0,2)) - 12).toString() + '0' + arr[index].slice(2);
    }
    
    arr[index] = arr[index].slice(0,-2);
    
    arr[index] = arr[index].match(/\d/g).join('');
  });

  var date1 = new Date();
  date1.setUTCHours(parseInt(arr[0].slice(0,2)), arr[0].slice(-2),0);
  
  var date2 = new Date();
  date2.setUTCHours(parseInt(arr[1].slice(0,2)), arr[1].slice(-2),0);
  
  if(date1 > date2) {
      date1.setUTCDate(date1.getUTCDate() - 1);
  }

  var minsDiff = (date2 - date1)/1000/60;

  return Math.round(minsDiff);
}

console.log(CountingMinutesI("1:23am-1:08am"));