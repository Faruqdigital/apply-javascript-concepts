
function feetToInch (feets){
    const inch = feets * 12;
    return inch;
}
const dadafeets = 12;
const dadaInch = feetToInch (dadafeets);
console.log('Total inch :', dadaInch);



function centimeterToMeter(centimeters){
    const meter = centimeters / 100;
    return meter;
}
const dadaCentiMeters = 250;
const dadaMeter = centimeterToMeter(dadaCentiMeters);
console.log('Total meter :', dadaMeter);

