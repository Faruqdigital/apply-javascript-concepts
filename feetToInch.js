const inches = 144;
const feet = inches / 12;
console.log('Total feet :', feet);


const feets = 5;
const inch = feets * 12;
console.log('Total Inch :', inch);



function feetToInch (feets){
    const inch = feets * 12;
    return inch;
}
const dadafeets = 12;
const dadaInch = feetToInch (dadafeets);
console.log('Total inch :', dadaInch);