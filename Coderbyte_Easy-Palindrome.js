//Coderbyte_Easy-Palindrome

function Palindrome(str) {
    if (str.length === 0) {
        return true;
    }  
    
    var arr = str.toLowerCase().match(/[a-z]/gi);
    var lng = arr.length;
    
    for (var i = 0; i < lng/2; i++) {
        if (arr[i] != arr[lng-1-i]) {
            return false;
        }   
    }
    return true;
}

console.log(isPalindrome('abba'));