// 클래스형 컴포넌트에서 2개 이상의 state 관리, 이벤트 처리
import { Component } from "react";

class MyEvent extends Component {
  state = {
    username: "",
    message: "",
  };
  changeName = (e) => {
    // 클래스형 컴포넌트에서 state 변경
    // this.setState(객체);
    const username = e.target.value;
    // 객체에서 key와 value가 같다면 생략가능 {username : username}과 같다.
    this.setState({ username });
  };
  handleMessage = (e) => {
    // e.target.value : input태그내 있는 value
    this.setState({ message: e.target.value });
  };

  render() {
    const { username, message } = this.state;
    return (
      <>
        <h1>클래스형 컴포넌트 이벤트 처리</h1>
        <input
          type="text"
          name="username"
          placeholder="이름을 입력하세요."
          onChange={this.changeName}
        />
        <br />
        {/* userName에서 입력되는 값들이 자동 업데이트 */}
        <input type="text" readOnly value={username} />
        <br />
        {/* message에서 입력되는 값들이 자동 업데이트 */}
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요"
          onChange={this.handleMessage}
        />
        <br />
        <input type="text" readOnly value={message} />
      </>
    );
  }
}

export default MyEvent;
