// 3! = 3x2x1
// 4! = 4x3x2x1
// x/factorial are same//

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
const result = factorial(7);
console.log(result);