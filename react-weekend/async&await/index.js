// 1. 동기와 비동기
// setTimeout은 비동기함수이다.
// 밑에 console.log('1')의 실행을 기다리지 않고 setTimeout함수를 실행한다.
// setTimeout은 Web APIs 기반이라서 멀티쓰레드 -> 비동기가 가능하다.

// console.log("시작");
// setTimeout(() => {
//   console.log("2");
// }, 3000);

// console.log("1");

// 2. 비동기 콜백
// function getData(callback) {
//   setTimeout(() => {
//     console.log("서버에서 데이터를 받아왔어요");
//     callback({ name: "별코딩" });
//   }, 2000);
// }
// getData((data) => console.log(data.name));

// 2-1. 로그인
function login(username, callback) {
  setTimeout(() => {
    callback(username);
  }, 1000);
}

// 2-2. 장바구니에 넣기
function addToCart(product, callback) {
  setTimeout(() => {
    callback(product);
  }, 1000);
}

// 2-3. 결제하기
function makePayment(cardNumber, product, callback) {
  setTimeout(() => {
    callback(cardNumber, product);
  }, 1000);
}

login("별코딩", (username) => {
  console.log(`${username}님 안녕하세요.`);
  addToCart("감자", (product) => {
    console.log(`${product}를 장바구니에 넣었습니다.`);
    makePayment("1234123412341234", "감자", (cardNumber, item) => {
      console.log(`${cardNumber.slice(0, 6)}으로 ${item}를 구매했습니다.`);
    });
  });
});
