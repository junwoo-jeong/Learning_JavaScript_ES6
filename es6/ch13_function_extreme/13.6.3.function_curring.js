//sum 함수가 매개변수를 하나만 허용하고 싶을 때 사용되는 패턴
function sum(arr, f) {
    if(typeof f != "function") f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}
//제곱근의 합과 세제곱의 합을 구하는 함수가 필요할 때

//이런식으로 필요할 때마다 적절하게 함수를 선언할 수도 있음
//하지만 이러한 패턴이 반복되면 이런식으로 같은 작업을 반복
function sumOfSquares(arr) {
    return sum(arr, x => x*x);
}

//보완하기 위해 아래와 같은 함수를 만듬
function newSummer(f) {
    return arr => sum(arr, f);
}

const sumOfSquare = newSummer(x => x*x);
const sumOfCube = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquare([1, 2, 3]));
console.log(sumOfCube([1, 2, 3]));
