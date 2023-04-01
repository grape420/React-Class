console.log(123);

// 변수 선언과 할당
var x = 1;
x = "hello";
console.log(x);
var x = 100; // 같은 이름으로 두번 선언된 것은 아니다.
console.log(x);

// ES2015에서 let(변수 선언)과 const(상수 선언)가 제공
let num = 1;
//let num = 2;    // let은 같은 이름으로 변수를 두번 선언할 수 없음.
console.log(num);

const pi = 3.14;
// pi = 3.1415;
console.log(pi); // const는 상수이므로 값 변경 불가능

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 배열도 값 변경 불가능
console.log(array);

// 문자열 템플릿(string template)
let name1 = "김종현";
let age = 28;
let hello = `안녕하세요 ${name1} 제 나이는 ${age}입니다.`;
console.log(hello);

// 연산자
// ==(값만 비교), ===(값과 자료형 비교)
let a = 1;
let b = "1";
console.log(a == b);
console.log(a === b);
