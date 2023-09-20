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
import AddTests from './components/AddTests';
import LabTests from './components/LabTests';
const MyH1 = styled.h1`
   color: red;
`
function App() {
  return (
    <Router>
        <div className="App">
        {/* Removed Side and Top bar */}
        {/* Routing will be required here */}
        <Routes>
            <Route path='/' element = {<MainContent/>} ></Route>
            <Route path='/profile' element={<Profile />} ></Route>
            <Route path='/signin' element={<Signin />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/add_tests' element={<AddTests />} ></Route>
            <Route path='/lab_tests' element={<LabTests />} ></Route>
        </Routes>  
    
        </div>
      </Router>
  );
}


export default App;
