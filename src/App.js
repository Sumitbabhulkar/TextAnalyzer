import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';

import React,{useState} from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const [btnText,setbtnText] = useState("Enable Dark Mode");

  const [alert,setAlert] = useState(null);


  const showAlert = (type,message)=>{
    setAlert({
      type:type,
      msg: message

    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark')
      setbtnText('Enable Light mode')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert("success","Dark mode Enabled")
    }
    else{
      setMode('light')
      setbtnText('Enable Dark mode')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("success","Light mode Enabled")
    }
  }


  return (

    <>

        <Navbar title="TextAnalyzer" mode={mode} toggleMode = {toggleMode} btnText={btnText} />
        <Alert alert={alert}/>
        <div className="container my-3">
        
          <TextArea heading="Enter the text to analyze below" showAlert = {showAlert} mode={mode}/>

        </div>
  
    </>
  );
}
export default App;
