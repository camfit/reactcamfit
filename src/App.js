import './App.css';
import'./css/Home.css';
import'./css/reset.css';
import Head from './components/Head';
import Foot from './components/Foot';
import Index from './components/Index';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Community from './components/Community';
import Search from './components/Search';
import Rsearch from './components/Rsearch';
import Manager from './components/Manager';
import Camping from './components/Camping';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Head></Head>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/menu1" element={<Menu1 />}></Route>
          <Route path="/menu2" element={<Menu2 />}></Route>
          <Route path="/menu3" element={<Menu3 />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/Rsearch" element={<Rsearch />}></Route>
          <Route path="/manager" element={<Manager />}></Route>
          <Route path="/camping" element={<Camping />}></Route>
          {/* <Route path="/u/*" element={<Menu/>}></Route> */}
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
        <Foot></Foot>
      </BrowserRouter>
    </div>
  );
}

export default App;
