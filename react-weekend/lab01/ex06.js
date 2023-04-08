// 객체 (object), 클래스(class)
const x = 1;
const y = 2;
const obj = {
  x: x,
  y: y,
  // 메소드(method) : 객체가 가지고 있는 함수
  log: function () {
    console.log(`x=${x}, y=${y}`);
  },
};

// obj.log();

//ES6(ECMAscript2015)부터 바뀐 내용 : key와 value가 값이 동일하다면 생략해서 사용 가능.
const obj2 = {
  x,
  y,
  // function 키워드 없이 메소드 선언이 가능
  log() {
    console.log(`x : ${x}, y : ${y}`);
  },
};

console.log(obj2);
obj2.log();

/*
  생성자 함수를 사용해서 객체의 모양을 선언
  class 키워드가 도입되기 전 (ES6 이전)
 */
function Book(title, author, publisher, price) {
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.price = price;
  // method
  this.discount = function (ratio) {
    return this.price * (1 - ratio);
  };
}

const book1 = new Book('리액트', '김민준', '길벗', 5000);

console.log(book1.discount(0.1));
console.log(book1);

/*
  ES6부터 class 키워드를 사용해서 객체의 모양을 정의
  클래스에서 변수를 선언할 때 let, const 등의 키워드 사용하지 않음.
  클래스에서 메소드를 선언할 때 function 키워드를 사용하지 않음.
  인스턴스 변수 - 객체가 생성된 후 사용할 수 있는 속성(변수)들
 */
class MyBook {
  // 생성자
  constructor(title, author, publisher, price) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
  }

  // 메소드
  discount(ratio) {
    return this.price * (1 - ratio);
  }
}

const book2 = new MyBook();
book2.title = '책 제목';
book2.author = '저자 이름';
book2.publisher = '출판사 이름';
book2.price = 10000;

const discountPrice = book2.discount(0.2);
console.log(discountPrice);
console.log(book2);

// 상속, override
// 도형
class Shape {
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

// 상속 : 원은 도형이다
// 도형(Shape) : 부모 타입(상위 타입), 원(Circle) : 자식 타입(하위 타입)
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y); // 부모 클래스의 생성자를 호출
    this.radius = radius;
  }

  // override : 부모가 가지고 있는 메소드를 재정의하는것.
  area() {
    return 3.14 * this.radius * this.radius;
  }
}

const circle = new Circle(0, 0, 10);
circle.move(1, 1); // 부모가 가지고 있는 메소드 사용 가능
console.log(circle);
console.log(circle.area()); // 자식이 가지고 있는 area()

class Rectangle extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  area() {
    return this.x * this.y;
  }
}
