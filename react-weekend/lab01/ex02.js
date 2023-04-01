// 조건문
let age = 28;
if (age < 20) {
  console.log("미성년");
} else {
  console.log("성인");
}

// 삼항 연산자
// (조건식) ? (조건식이 참인 경우) : (조건식이 거짓인 경우)
let result = age < 20 ? "미성년" : "성인";
console.log(result);

let x = 10;
if (x > 0) {
  console.log("양수");
} else if (x < 0) {
  console.log("음수");
} else {
  console.log("0입니다.");
}

// switch-case 문
let today = new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());

switch (today.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("일하는 요일");
    break;
}

// switch문은 == 비교
let num = "1";
switch (num) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;

  default:
    console.log("unknown");
    break;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("----------------------");

/* for-in : 배열의 인덱스를 순회(iteration) */
for (const key in array) {
  console.log(`${key} : ${array[key]}`);
}
console.log("---------------------");

/* for-of : 배열의 원소를 순회(iteration) */
for (const key of array) {
  console.log(key);
}
console.log("---------------------");

// while
let number = 1;
while (number < 10) {
  console.log(`${number}`);
  number++;
}
console.log("---------------------");

// do-while
let i = 1;
do {
  console.log(`i = ${i}`);
  i++;
} while (i > 5);
