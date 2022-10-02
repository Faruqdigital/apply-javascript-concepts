//inch to feet

//single

// const myInches = 12;
// const myFeet =myInches / 12;
// console.log(myFeet);

// const inches = 144;
// const feet = inches / 12;
// console.log('total', feet);

//multiple

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet =  inchToFeet(dadaInches);
console.log(dadaFeet);

const dadiInches = 60;
const dadiFeet = inchToFeet(dadiInches);
console.log(dadiFeet);

//practice

// function milesToKiloMeter(miles){
//     const kilometer = miles * 1.60934;
//     return kilometer;
// }
// const myMiles = 2;
// const myKilometer = milesToKiloMeter(myMiles);
// console.log(myKilometer);

