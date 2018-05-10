/*pure function
1. 입력이 같으면 결과도 같아야함
2. 함수를 호출한다고 해서 프로그램의 상태가 바뀌어서는 안됨
*/



//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//let colorIndex = -1;
/*아래 함수의 문제점
1. 입력이 같아도(매개변수가 없는 것) 결과가 항상 다름
2. 변수 colorIndex를 바꾸는 부수효과가 있음
    function getNextRainbowColor(){
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    }
*/


/*첫번째 해결방법
    클로져로 외부변수를 감싸는 방법
    하지만 입력에 따른 결과가 계속 바뀐다는 점에서 순수한 함수라고 할수 없음
*/
const getNextRainbowColor = (function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return function(){
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();

/*두번째 해결방법
    이터레이터를 사용하는 방법
*/
function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex = 0;
            return {value: colors[colorIndex], done: false };
        },
    };
}

const rainbowIterator = getRainbowIterator();
setInterval(function() {

})
