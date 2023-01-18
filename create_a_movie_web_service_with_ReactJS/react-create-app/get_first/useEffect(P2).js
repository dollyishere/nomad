import { useState, useEffect } from "react";

function Hello() {
  // case (1)
  useEffect(function () {
    console.log("hi :)");
    // component destroy될 때 실행되는 code
    return function () {
      console.log("bye :(");
    };
  }, []);
  // case (2)
  // 아래가 더 짧고 간단함
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;