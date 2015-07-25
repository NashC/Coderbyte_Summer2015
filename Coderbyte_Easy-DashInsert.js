//Coderbyte_Easy-DashInsert

function DashInsert(str) {
    str = str.toString(10).split("").map(function(t){return parseInt(t)})
    
    var dashed = [];
    
    for(var i =0; i<str.length; i++) {
        dashed.push(str[i]);
        if (str[i] % 2 == 1 && str[i+1] % 2 == 1) {
            dashed.push('-');
        }
    }
    
    return dashed.join('');
}

console.log(DashInsert(56730));