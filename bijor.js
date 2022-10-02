
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element !== 2){//(!==  odd bejor sonkha)
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 11, 34, 45, 35, 33];
getSumOfAnArray(myNumbers);
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);