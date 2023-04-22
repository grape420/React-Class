class Component {
  constructor(props) {
    this.props = props;
  }
}

const comp1 = new Component({ name: '홍길동', age: 20 });
console.log(comp1.props);

// MyComponent : 하위 클래스, 자식 클래스
// Component : 상위 클래스, 부모 클래스
class MyComponent extends Component {
  // 클래스안에서 변수에 접근할 때 this 키워드를 쓴다.
  constructor(props, isTrue) {
    super(props); // 부모 클래스의 생성자를 명시적으로 호출
    this.isTrue = isTrue;
  }

  render() {
    return `
      Hello, ${this.props.name}
    `;
  }
}

const comp2 = new MyComponent({ name: '이순신', age: 15 }, true);
console.log(comp2.props, comp2.isTrue);
console.log(comp2.render());
