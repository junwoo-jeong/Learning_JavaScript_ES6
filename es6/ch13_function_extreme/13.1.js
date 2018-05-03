'use strict';

//서브루틴 전
const year = new Date().getFullYear();
if(year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
else if(year % 100 != 0) console.log(`${year} IS a leap year.`);
else if(year % 400 != 0) console.log(`${year} is NOT a leap year.`);
else console.log(`${year} is a leap year.`);

//서브루틴으로 해결, 자바스크립트에서는 함수
function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
    else if(year % 100 != 0) console.log(`${year} IS a leap year.`);
    else if(year % 400 != 0) console.log(`${year} is NOT a leap year.`);
    else console.log(`${year} is a leap year.`);
}

printLeapYearStatus();
