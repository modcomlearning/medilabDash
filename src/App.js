import logo from './logo.svg';
import './App.css';


import styled from "styled-components"
import SideBar from './components/SideBar';
const MyH1 = styled.h1`
   color: red;
`
function App() {
  return (
    <div className="App">
      <SideBar/>
    </div>
  );
}


export default App;
