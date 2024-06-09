function getName() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // resolve("철수");
      reject(new Error("에러: 이름이 없어요"));
    }, 1000);
  });
}

function getTodo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("밥먹기");
      // reject(new Error("에러: 할 일이 없어요"));
    }, 2000);
  });
}

// Promise.all() - 배열 안에 있는 promise 객체들을 병렬적으로 실행
// Promise.all([배열])
// 배열 안에 값 중에서 하나라도 실패하면 catch문으로 넘어감
const promise = Promise.all([getName(), getTodo()]);
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.allSettled()
// Promise.allSettled([배열])
// 배열 안에 있는 promise 객체들이 완료될 때까지 기다림
// 배열 안에 있는 객체들의 성공 실패 여부를 json형태로 반환
const promise2 = Promise.allSettled([getName(), getTodo()]);
promise2.then((data) => console.log(data)).catch((error) => console.log(error));

// Promise.any()
// Promise.any([배열])
// 배열 안에 있는 promise 객체들 중 성공하는 첫 번째 promise 객체 반환
const promise3 = Promise.any([getName(), getTodo()]);
promise3.then((data) => console.log(data)).catch((error) => console.log(error));

// Promise.race()
// 배열 안에 promise 객체들 중에 가장 먼저 완료되는 promise 객체 반환
const promise4 = Promise.race([getName(), getTodo()]);
promise4.then((data) => console.log(data)).catch((error) => console.log(error));
