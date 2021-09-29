import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [textbtn, settextbtn] = useState("Enable Dark mode");
  const [alert, setalert] = useState(null);
  const [night, setnight] = useState('light');
  const [nightbtn, setnightbtn] = useState("Enable Night mode");
  const [navbar, setnavbar] = useState('light');
  const [btncolor, setbtncolor] = useState('dark');

  const showAlert = (message) =>{
    setalert(message);
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toogleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      settextbtn('Enable Light Mode');
      document.body.style.backgroundColor = '#042735';
      showAlert("Dark Mode has been Enabled");
      setnavbar('dark');
      setbtncolor('light');
    }
    else{
      setmode('light');
      settextbtn('Enable Dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled");
      setnavbar('light');
      setbtncolor('dark');

    }
    
  }

  const nightMode = () =>{
    if(night === 'light'){
      setnight('dark');
      setnightbtn('Enable Light Mode');
      document.body.style.backgroundColor = '#e9b80bb3';
      showAlert("Night Mode has been Enabled");
      setnavbar('light');
      setbtncolor('danger');
    }
    else{
      setnight('light');
      setnightbtn('Enable Night mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled");
      setnavbar('light');
      setbtncolor('dark');
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode = {mode} toogleMode = {toogleMode} textbtn = {textbtn} nightMode = {nightMode} nightbtn={nightbtn} night = {night} navbar = {navbar} btncolor = {btncolor}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/">
        <TextForm heading = 'Enter the text: ' mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
