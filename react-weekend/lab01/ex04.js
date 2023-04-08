//ExNext - ECMAScript2015이후

// 전개 연산자 (spread operator)
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 9, 10];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// 구조 분해 할당
const [one, two, ...others] = combinedArray;
console.log(one);
console.log(two);
console.log(others);
