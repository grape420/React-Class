// 함수
function add(a, b) {
  return a + b;
}
// console.log(add(2, 3, 4));
console.log(add("abc", 2)); // JS 함수는 argument 타입을 검사하지 않음.
console.log(add(1)); // JS 함수는 argument 개수를 검사하지 않음.

// default argument
function addDefault(a, b = 10) {
  return a + b;
}

console.log(addDefault(1, 5));
console.log(addDefault(1));
console.log(addDefault());

const myFunc = addDefault;
console.log(myFunc(15, 50));
