// 배열
// mutable(원본 배열이 변경) vs immutable(원본 배열은 유지, 새로운 배열 리턴) 메서드

const arr1 = [];
const newLength = arr1.push(100); // push는 원본 배열이 변경
// 원본 배열 arr1에 새로운 원소를 추가하고 새로운 배열의 길이를 리턴함
console.log(arr1);
console.log(newLength);

const arr2 = [];
const newArr = arr2.concat(100).concat(200); // concat은 배열을 리턴하기 때문에 메소드 추가 호출 가능(immutable 메소드)
console.log(newArr);

const arr3 = [1, 2, 3, 4, 5];
const popResult = arr3.pop(); // pop()은 배열의 마지막 원소 삭제하고 배열 리턴 (원본 배열이 변경)
console.log(arr3);
console.log(`popResult : ${popResult}`);

const arr4 = [1, 2, 3, 4, 5];
const sliced = arr4.slice(0, arr4.length - 1); // 인덱스 0 이상 4 미만 범위의 원소들을 자름.
// slice()는 원본 배열이 변경 되지 않음 -> 잘라낸 배열의 복사본을 리턴
console.log(`arr4 : ${arr4}`);
console.log(`sliced : ${sliced}`);

//ES6에서 새롭게 추가된 Array 함수들
// forEach, filter, map, reduce
// forEach(callback), filter(callback), map(callback)
// forEach, filter, map의 argument로 전달되는 callback 함수의 argument들 :
// -value : 배열에서 반복하면서 순서대로 꺼내는 값
// -index : 배열의 인덱스
// -array : 배열 자체
// callback을 작성할 때는 필요한 argument들만 선언해도 됨.

const front = ['HTML', 'CSS', 'JS', 'TypeScript'];
// forEach에는 콜백함수를 던짐. 배열의 첫번째 요소부터 콜백함수의 argument로 던짐
front.forEach((e, index) => console.log(`index : ${index}, value : ${e}`));

// filter() : callback 함수의 조건에 맞는 원소들을 배열로 리턴
const filtered = front.filter((e) => e.length >= 5);
console.log(filtered);

// map() : 순서대로 반복하면서 원소를 다른 값으로 변환.
const mapped = front.map((e) => e.toLowerCase());
console.log(mapped);

// 배열 front에서 5글자 이상인 문자열들을 대문자로 변환 후 출력
front.filter((e) => e.length >= 5).map((e) => console.log(e.toUpperCase()));
// .forEach((e) => console.log(e));

/*
  arrow function
  (param, ...) => ${ statement; ...}
  (param, ...) => statement : 함수 body에 실행문이 하나만 있는 경우
  (param, ...) => 리턴값 : 함수 body에 실행문이 하나만 있고 실행문이 리턴문인 경우
 */

/*
  reduce(callback, initialValue) : 배열의 모든 원소를 순회해서 값 1개를 리턴
  callback 함수의 argument들
  - previousValue : callback 함수에서 이전에 리턴된 값
  - currentValue : 반복하고 있는 현재 배열의 값
  - currentIndex : 반복하고 있는 현재 배열의 인덱스
  - array : 반복하고 있는 배열 자체
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((total, current) => (total += current), 100);
const factorial = numbers.reduce((total, current) => (total *= current), 1);
// console.log(`sum : ${sum}`);
// console.log(`factorial : ${factorial}`);
// console.log(`numbers : ${numbers}`);

// 쿼리스트링을 분석해서 객체로 변환하는 함수
const queryString = 'apple=10&banana=20&order=Y';
// -> {apple : 10, banana : 20, order : Y}
function parse(qs) {
  let result = {};
  const chunks = qs.split('&'); // -> ['apple=10', 'banana=20', 'order=Y']
  for (let i of chunks) {
    const [key, value] = i.split('=');
    // const part = i.split('='); // -> ['apple', '10']
    // const key = part[0];
    // const value = part[1];
    result[key] = value;
  }
  return result;
}
function parse2(qs) {
  let result = {};
  const chunks = qs.split('&');
  chunks.forEach((x) => {
    const [key, value] = x.split('=');
    result[key] = value;
  });
  return result;
}

function parse3(qs) {
  return qs.split('&').map((x) => {
    // x='apple=10'
    const [key, value] = x.split('='); // key = apple, value = 10

    // return { key : key, value : value }; // key와 value가 값이 동일하다면 생략해서 사용 가능
    return { key, value };
  });
}

function parse4(qs) {
  return qs
    .split('&')
    .map((x) => {
      const [key, value] = x.split('='); // [key, value] = [apple, 10]
      return { key, value }; // [{key : apple, value : 10}, {key : banana, value : 20}, {key : order, value : Y}]
    })
    .reduce((prev, curr) => {
      prev[curr.key] = curr.value; // {apple : 10, banana : 20, order : Y}
      return prev;
    }, {});
}

// console.log(parse(queryString));
// console.log(parse2(queryString));
// console.log(parse3(queryString));
console.log(parse4(queryString));
