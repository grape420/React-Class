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
