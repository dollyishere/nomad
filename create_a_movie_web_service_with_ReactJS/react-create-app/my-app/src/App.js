import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Movie from "./components/Movie"

function App() {
  // 이 경우 Router(BrowserRouter(Hash와는 url 작성 시 # 유무의 차이))가 가장 먼저 렌더링됨
  // Routes는 2종 이상의 라우팅을 가능하게 함(switch의 대체)
  return (
  <Router>
  <Routes> 
  <Route path="/hello" element={<h1>hello</h1>}/>
  <Route path="/" element={<Home />} />
  <Route path="/movie/:id" element={<Detail />} />
  </Routes>
  </Router>
  )
}

export default App;