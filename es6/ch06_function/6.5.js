//함수바디 안에서의 this 키워드
'use strict';

const o = {
    name: 'Wallace',
    speak() {return `My name is ${ this.name }`;},
    // 함수안에서의 this키워드는 함수가 포함된 객체를 의미함
};
console.log(o.speak());

//오브젝트 내에서 중첩함수가 사용 되었을 시 해결방법 
const obj = {
    name: 'Julie',
    greetBackwards: function() {
        //함수가 중첩이 되면 안쪽함수의 this 객체는 의도치 않은 객체를 가리키게 된다.
        //this 객체를 다른변수에 할당
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i = self.name.length-1 ; i>=0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym,olleH`;
    },
};

console.log(obj.greetBackwards());
