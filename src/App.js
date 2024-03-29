import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react'

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(5,40,70)'
      document.body.style.color = 'white'
      document.querySelector('#myBox').style.backgroundColor = 'rgb(180,180,180)'
      document.querySelector('#myBox').style.color = 'white'
      showAlert("Dark mode has been enabled!", "Success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'rgb(120,120,120)'
      document.querySelector('#myBox').style.backgroundColor = 'white'
      document.querySelector('#myBox').style.color = 'black'
      showAlert("Light mode has been enabled!", "Success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Chracter Counter, Remove Extra Spaces" />}>
            </Route>
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
