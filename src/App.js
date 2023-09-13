import logo from './logo.svg';
import './App.css';


import styled from "styled-components"
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Signin from './components/Signin';
const MyH1 = styled.h1`
   color: red;
`
function App() {
  return (
    <Router>
        <div className="App">
        <SideBar />
        <TopBar />
        {/* Routing will be required here */}
        <Routes>
            <Route path='/' element = {<Signin/>} ></Route>
            <Route path='/profile' element = {<Signup/>} ></Route>
        </Routes>  
    
        </div>
      </Router>
  );
}


export default App;
