import React  from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Menu from './components/Menu';
import Result from './components/Result'
import Timetable from './components/Timetable';

function App() {
  return (
    <div className="">   
      <Navbar title="STMS"></Navbar>
      <Login></Login>  
      <Menu></Menu>  
      <Result></Result>
      <Timetable></Timetable>
    </div>
  );
}

export default App;
