var inputString = 'exemplo'; //exemplo de entrada

function checkPalindrome(inputString){
    var newWord = inputString.split('').reverse().join('');
    if(inputString == newWord){
        return true;
    } else{
        return false;
    }
}

console.log(checkPalindrome('ama')) //exemplo de saída
