console.log("before timeout : " + new Date());
function f() {
    console.log("After timeout : " + new Date());
}
//콜백의 실행을 지정된 밀리초만큼 지연하는 내장 함수
setTimeout(f, 30*1000);
console.log("I happen after setTimeout!");
console.log("Me too!");
