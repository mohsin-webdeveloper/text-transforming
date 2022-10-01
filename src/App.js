import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'

import Textform from "./components/Textform";
import Alerts from "./components/Alerts";
import Apidata from "./components/Apidata";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  const [modes, setModes] = useState('light');  //navbar dark or light modes states
  const [btns, setBtns] = useState('Enables Darkmode') // navbar enable disable button states
  const [alert, setAlert] = useState(null)
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })  
  setTimeout(() => {
  setAlert(null);
  }, 1500);
  }

  const modeToggle =()=>{     //funciton onclick navbar button 
  if(modes==='light')
  {
    setModes('dark');
    setBtns('Disable Darkmode');
    document.body.style.backgroundColor='#1b857c';
    showAlert("dark mode enable","danger");

  }
  else{
    setModes('light');
    setBtns('Enable Darkmode');

    document.body.style.backgroundColor='white';
    showAlert('dark mode disable','success');



  }
 }
  return (
    <>
    <Router>
     <Navbar title="Text Transforming App" modes={modes} modeToggle={modeToggle} btns={btns}/>
     <Alerts  alert={alert}/>
     <div className="container">
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/apidata">
            <Apidata/>
          </Route>

         

          <Route exact path="/">
                <Textform showAlert={showAlert} texhHeading="Enter the text to Analyse " modes={modes}/>

          </Route>
         
        </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
