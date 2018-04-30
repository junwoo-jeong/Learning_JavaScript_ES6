'use strict';

// 객체의 프로퍼티인 함수의 선언방법
const o = {
    name:'Wallace',
    bark: function() { return this.name; },// 기존 es5 선언 방식
    bark2() {return this.name; }, // es6의 새로운 선언방식
};

console.log(o.bark());
console.log(o.bark2());
