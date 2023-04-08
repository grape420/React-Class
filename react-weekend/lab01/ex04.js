//ExNext - ECMAScript2015이후

// 전개 연산자 (spread operator)
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 9, 10];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// 구조 분해 할당
// const [one, two, ...others] = combinedArray;
// console.log(one);
// console.log(two);
// console.log(others);

function f1(...args) {
  const [first, ...others] = args;
  console.log(`first = ${first}`);
  console.log(`others = ${others}`);
}

console.log(combinedArray);
f1(combinedArray);

// 객체 전개 연산자
const obj1 = {
  one: 1,
  two: 2,
  zero: 0,
};
const obj2 = {
  four: 4,
  five: 5,
  zero: 0,
};
const { one, two, three } = obj1;
const { four, five, six } = obj2;

// 객체에서는 중복된 키 값은 마지막에 사용된 값으로 덮어씀.
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject.zero);

const employee = {
  empId: 100,
  empName: '김종현',
  salary: 300,
};

// function display(employee) {
//   console.log(`사번 : ${employee.empId}`);
//   console.log(`이름 : ${employee.empName}`);
//   console.log(`급여 : ${employee.salary}`);
// }
// display(employee);

// 객체 구조 분해 할당
const { empId, empName, salary } = employee;
console.log(empId);
console.log(empName);
console.log(salary);

function display2({ empId, empName, salary }) {
  console.log(`사번 : ${empId}`);
  console.log(`이름 : ${empName}`);
  console.log(`급여 : ${salary}`);
}
display2(employee);
