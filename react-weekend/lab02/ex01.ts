// TypeScript는 변수를 선언할 때 타입 주석(type annotation)을 사용한다.
let x = 1;
// x = "hello";
// -> TS에서는 타입이 다른 값을 재할당할 수 없음.
console.log(`x : ${x}`);
console.log(typeof x);

// TS 파일 실행
// (1) tsc xyz.ts -> TS를 JS로 변환
// (2) node xyz.ts 0> JS를 node 환경에서 실행

// TS 파일 실행 2
// ts-node xyz.ts -> 변환과 실행을 동시에 함

// TS는 타입 추론 기능이 있음. 할당하는 값을 보고 변수의 타입을 결정
let y = "hello";
// y = 123  // -> 다른 타입의 값은 저장할 수 없음.
console.log(`y : ${y}`);

// TS에서는 함수에서의 타입을 정해줘야 함. 리턴 타입은 타입 안 정해줘도 됨
const plusOne = (z: number) => z + 1;
console.log(plusOne(2));

const user = {
  id: 1,
  name: "김종현",
  obj: {},
};

// 객체가 갖는 프로퍼티들의 타입을 선언 - 객체의 모양 선언
interface User {
  id: number;
  name: string;
  obj: object;
}

function showUser(user: User) {
  console.log(`id : ${user.id}, name : ${user.name}, obj : ${user.obj}`);
}
showUser(user);

// Union(합집합) 기능을 사용해서 간단한 타입들을 조합한 새로운 타입을 선언
type LockState = "locked" | "unlocked";
let isLocked: LockState = "locked"; // 할당 가능한 값이 'locked'와 'unlocked' 뿐

console.log(isLocked);

// Union(합집합) 기능을 함수 파라미터 타입 주석에서도 활용
function getLength(x: string | string[]) {
  return x.length;
}

console.log(getLength("hello"));
console.log(getLength(["a", "b", "c", "d", "e", "f"]));

// 변수의 타입을 알아내고자 할때 typeof 사용
// 배열인 경우 Array.isArray(x) 함수 사용

function wrap(x: string | string[]) {
  if (typeof x === "string") {
    return [x];
  }
  return x;
}

console.log(wrap("1"));

/*
  npx create-react-app lab03
  package.json이 있는 폴더에서 npm start
  package.json에서 dependencies는 프로젝트를 하는데 있어서 필요한 패키지 모음
  react, react-dom, react-scripts는 필수
  npm i : npm install
 */
