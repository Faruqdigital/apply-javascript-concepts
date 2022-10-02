function factorial(number){
    let result = 1;
    for(i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial 7 :', number, fact);