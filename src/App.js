import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(5,40,70)'
      document.body.style.color = 'white'
      document.querySelector('#myBox').style.backgroundColor = 'rgb(180,180,180)'
      document.querySelector('#myBox').style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'rgb(120,120,120)'
      document.querySelector('#myBox').style.backgroundColor = 'white'
      document.querySelector('#myBox').style.color = 'black'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyse"/>
        {/* {<About/>} */}
      </div>
    </>
  );
}

export default App;
