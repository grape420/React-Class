import { useEffect, useState } from "react";

const LifeEx3 = () => {
  // useState Hooks
  const [now, setNow] = useState(new Date());

  // useEffect Hooks
  // useEffect(effect, dependencies)
  // - effect : 콜백 함수
  // - dependencies : 의존성 배열.
  // useEffect 함수를 호출하면 effect 콜백 함수가 1번 실행됨.
  // 의존성 배열의 원소 값이 변경될 때마다 콜백 함수가 실행됨. (now가 변경될 때마다 콜백 함수 실행)
  // componentDidMount(render() 이후), componentWillUnmount 생명주기 함수들의 기능을 수행.
  useEffect(() => {
    console.log("useEffect");
    const id = setInterval(() => setNow(new Date()), 1000);

    // useEffect가 리턴하는 콜백은 컴포넌트가 unmount될 때 호출됨. (componentWillUnmount)
    // 컴포넌트가 unmount될 때 할 일이 없으면 null 리턴
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>함수형 컴포넌트 Hooks</h1>
      <h2>현재 시간 : {now.toLocaleTimeString()}</h2>
      <h2>현재 날짜 : {now.toLocaleDateString()}</h2>
    </>
  );
};

export default LifeEx3;
