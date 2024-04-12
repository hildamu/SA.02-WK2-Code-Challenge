const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function primeNum(num){
    for (let i = 2; num >i; i++){
        if(num % i===0){
            return false;
        }
    }
    return num>1;
}
console.log(numArray.filter(primeNum));