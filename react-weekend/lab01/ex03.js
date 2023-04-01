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

const plusN = (n) => {
  let f = (x) => {
    return x + n;
  };
  return f;
};

let plusOne = plusN(1);
console.log(plusOne);
console.log(plusOne(100));

let plusTen = plusN(10); // plusN(10) 자리에 x + 10이 리턴되는 함수가 들어감.
// let plusTen = (x) => {
//   return x + 10;
// };
console.log(plusTen(100));

// 화살표 함수 (arrow function)
let multiply = (x, y) => x * y;
console.log(multiply(100, 100));
console.log(multiply("abc", "qwe"));
console.log(multiply());

let hello = () => "안녕하세요";
console.log(hello());

function myFilter(arr, func) {
  const result = [];
  for (let x of arr) {
    if (func(x)) {
      result.push(x);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
let result = myFilter(numbers, (x) => x % 2 !== 0);
console.log(result);
