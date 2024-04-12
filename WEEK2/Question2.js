function createArray(num1, num2){
    let array=[];
    for(let i = num1;i<=num2;i++){
        array.push(i);
    }
    return array;

}
let array = createArray(4,7);
console.log(array);

