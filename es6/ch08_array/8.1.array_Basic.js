// 배열 리터럴
const arr1 = [1,2,3];                       // 숫자로 구성된 균등한 배열
const arr2 = ['one', 2, 'three'];           // 비균질적 배열(인덱스간 타입이 다름)
const arr3 = [[1,2,3],['one', 2, 'three']]; // 배열안에 배열이 포함된 배열


// 배열 요소에 접근하기
arr1[0];        // 1
arr1[2];        // 3
arr3[1];        // ['one', 2, 'three']


//배열 길이(기본적으로 length 프로퍼티를 가지고 있음)
arr1.length;    // 3
arr2.length;    // 3
arr3.length;    // 2


//배열 길이 늘리기
arr1[4] = 5;
arr1;           //[1, 2, 3, undifined, 5]
