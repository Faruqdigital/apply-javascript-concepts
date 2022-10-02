//even means jor sonkha
//odd means bejor sonkha

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven = isEven(100);
console.log(myNumberIsEven);
const herNumberIsOdd = isEven(103);
console.log(herNumberIsOdd );
