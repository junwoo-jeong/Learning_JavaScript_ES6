const SYM = Symbol();

const o = {
    a: 1,
    b: 2,
    c: 3,
    [SYM]: 4,
};
//9.1.1 객체의 프로퍼티 나열, symbol은 표시되지 않음
for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

//9.1.2 object.keys, 나열 가능한 문자열 프로퍼티를 배열로 반환
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
