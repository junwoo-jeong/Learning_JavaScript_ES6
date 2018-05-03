//정적 스코프
'use strict';

const x = 3;

//정적 스코프란 함수가 정의될 당시에 알 수 있는 스코프
function f() {
    console.log(x);
    console.log(y);
}

{
    const y = 5;
    f();
}
