//check Leapyear

function isLeapyear (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('your year is Leap year', year);
    }
    else{
        console.log('your year is not a Leap Year', year);
    }
}
isLeapyear(1933)
isLeapyear(1960)

// true or false leap year

function isLeapyear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
       return false;
    }
}
const isMyYearIsLeapYear = isLeapyear(1933);
console.log('my year',isMyYearIsLeapYear);
const isMyYearIsNotLeapYear = isLeapyear(1960);
console.log('Her year',isMyYearIsNotLeapYear);
