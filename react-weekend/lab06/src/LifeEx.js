import { Component } from "react";

// 생명주기 메서드는 클래스 컴포넌트에서만 사용 가능.
// Component 클래스에서 상속받아서 재정의하는 메서드.
class LifeEx extends Component {
  state = {
    color: null, // 부모 컴포넌트에서 전달받은 props에서 동기화 시킬 상태
    number: 0, // 컴포넌트 자체에서 관리할 상태
  };

  constructor(props) {
    super(props); // 부모 클래스 Component의 생성자를 호출.

    console.log("constructor() : ", props.color);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps()");
    console.log("nextProps :", nextProps);
    console.log("prevProps :", prevState); // render()가 되기 이전 상태

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
      // 리턴값은 setState 함수의 argument로 전달됨.
    }

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("nextProps :", nextProps);
    console.log("nextState :", nextState);

    return nextState.number !== 3;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log("prevProps :", prevProps);
    console.log("prevState :", prevState);

    return "test";
    // 여기에서 리턴값은 componentDidUpdate의 마지막 parameter인 snapshot에 전달됨
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("prvProps :", prevProps);
    console.log("prvState :", prevState);
    console.log("snapshot :", snapshot);
  }

  // increaseNumber() {
  //   this.setState();
  // }
  /*
    일반 이벤트 핸들러 함수에서 this의 의미는
    이벤트가 발생한 HTML 엘리먼트.(button)
    HTML 엘리먼트는 setState 리액트 컴포넌트의 메서도를 가지고 있지 못함.

    화살표 함수에서 this의 의미는
    화살표 함수를 가지고 있는 컴포넌트 객체.(LifeEx)
   */
  increaseNumber = () => {
    console.log("click event handler");
    this.setState(({ number }) => ({
      number: number + 1,
    }));
  };

  render() {
    console.log("render()");

    const style = { color: this.props.color };
    return (
      <>
        <h2 style={style}>{this.state.number}</h2>
        <h3 style={style}>{this.state.color}</h3>
        <button onClick={this.increaseNumber}>+</button>
      </>
    );
  }
}

export default LifeEx;
