//arrow function

'use strict';

/*
 arrow 함수의 선언 방법
 //es5 형태의 선언 방식
    const f1 = function() { return 'Hello!'; };
 1. function 생략 가능
    const f2 = () => 'Hello';
 2. 매개변수가 하나 뿐이라면 () 생략 가능
    const f3 = name => { return `Hello, ${name}!`; }
 3. 함수 바디가 표현식 하나라면 중괄호와 return 문 생략 가능
    const f4 = name => `Hello, ${name}!`;
*/

/*일반 선언 방식과 가장 큰 차이
    내부 함수 안에서 this를 사용할 수 있음
*/
const obj = {
    name: 'Julie',
    greetBackwards: function() {
        //함수가 중첩이 되면 안쪽함수의 this 객체는 의도치 않은 객체를 가리키게 된다.
        //this 객체를 다른변수에 할당
        /*const self = this; //기존 es5 방식에서는 이런 형태로 해야됨
        function getReverseName() {
            let nameBackwards = '';
            for(let i = self.name.length-1 ; i>=0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }*/
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i = this.name.length-1 ; i>=0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym,olleH`;
    },
};
obj.greetBackwards();
