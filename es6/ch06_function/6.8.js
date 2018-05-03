'use strict';

const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };

//어떠한 객체에도 연결되지 않았지만 this 키워드 사용
function great() {
    return `Hello, I'm ${this.name}!`;
}

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

//call 방식은 매개변수를 하나 하나 받음
update.call(bruce, 1949, 'singer');
console.log(great.call(bruce));
console.log(bruce);

//apply 방식은 매개변수를 배열로 받음
//매개변수로 배열을 받을 때 유용
update.apply(madeline,[1995, 'student']);
console.log(great.apply(madeline));
console.log(madeline);

//bind함수를 이용하여 this가 가리키는 객체를 영구히 지정해줄 수 있음
const updateBruce = update.bind(bruce);
updateBruce.call(madeline, 1888, 'king');
console.log(bruce);
