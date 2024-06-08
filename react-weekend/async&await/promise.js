// resolve : 비동기작업이 완료됐다는걸 알려주는 함수. argument로 결과값을 전달하면 된다.
// reject : 비동기작업이 실패했을 때 실행되는 함수. argument로 에러 전달

// promise로 비동기 구현
function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "철수" };
      // const data = null;
      if (data) {
        console.log("네트워크 요청 성공");
        resolve(data);
      } else {
        reject(new Error("네트워크 문제!!!"));
      }
    });
  });

  return promise;
}

function getData2() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "영희" };
      // const data = null;
      if (data) {
        console.log("네트워크 요청 성공");
        resolve(data);
      } else {
        reject(new Error("네트워크 문제!!!"));
      }
    });
  });

  return promise;
}

// then(), catch(), finally()
// then()의 콜백함수의 argument로는 resolve()의 argument가 전달된다 (비동기 통신의 결과값)
// const promise = getData();
// promise
//   .then((data) => {
//     const name = data.name;
//     console.log(`${name}님 안녕하세요.`);
//   })
//   // catch()의 콜백함수의 argument로는 reject()의 argument인 Error가 전달된다. (통신 실패했으니 에러메세지)
//   .catch((error) => {
//     console.log(`${error}가 발생했습니다.`);
//   })
//   // 통신의 성공 실패 여부 상관없이 작업 끝에는 finally() 실행
//   .finally(() => {
//     console.log(`마무리 작업`);
//   });

// Promise chaining
// promise
//   .then((data) => {
//     console.log(data);
//     return "hello";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Fetch API
// URL : https://jsonplaceholder.typicode.com/users

// fetch()의 argument에는 URL이 들어가고 그 URL의 결과값은 then()의 콜백함수의 argument인 response로 들어옴
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   // 결과값인 response를 json()로 리턴하고 다시 then()의 콜백함수의 argument인 data로 json이 반환됨
//   .then((data) => {
//     console.log(data);
//   });

// 비동기 콜백함수 promise로 리팩토링
// 2-1. 로그인
function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve(username);
      } else {
        reject(new Error("아이디를 입력해주세요."));
      }
    }, 1000);
  });
}

// 2-2. 장바구니에 넣기
function addToCart(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product != "") {
        resolve(product);
      } else {
        reject(new Error("제품이 없습니다."));
      }
    }, 1000);
  });
}

// 2-3. 결제하기
function makePayment(cardNumber, product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cardNumber.length !== 16) {
        reject(new Error("카드번호를 확인해주세요"));
        return;
      }
      if (!product) {
        reject(new Error("결제할 상품을 넣어주세요"));
        return;
      }
      const data = { cardNumber: cardNumber, product: product };
      resolve(data);
    }, 1000);
  });
}

login("")
  .catch(() => "익명")
  .then((username) => {
    console.log(`${username}님 안녕하세요`);
    return addToCart("");
  })
  .catch(() => "옥수수")
  .then((product) => {
    console.log(`${product}를 장바구니에 넣었습니다.`);
    return makePayment("1234123412341234", product);
  })
  .then((item) =>
    console.log(
      `${item.cardNumber.slice(0, 6)}으로 ${item.product}를 구매했습니다.`
    )
  )
  .catch((err) => console.log(err.message));
