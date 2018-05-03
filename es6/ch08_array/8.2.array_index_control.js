//배열 요소 조작
'use strict';

// 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거
const arr = ['b', 'c', 'd'];
arr.push('e');  // return 4(수정 후 배열 길이), 배열의 끝에 문자 추가
arr;            // ['b', 'c', 'd', 'e']
arr.pop();      // return 'e'(빠져나온 데이터 반환), 배열의 마지막 인덱스 제거
arr;            // ['b', 'c', 'd']
arr.unshift('a');//['a', 'b', 'c', 'd'], return 4
arr.shift();    // ['b', 'c', 'd'] , return a

//임의의 위치에 요소 추가하거나 제거
const arr2 = [1,5,7];
arr2.splice(1, 0, 2, 3, 4); // [1,2,3,4,5,7]
arr2.splice(5, 0, 6);       // [1,2,3,4,5,6,7]
arr2.splice(1,2);           // [1,4,5,6,7]; return [2,3]
