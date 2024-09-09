import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import ReactDOM from 'react-dom/client';


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#030721';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <TextForm heading="Enter the Text Here" mode={mode} />
    </>
  );
}

export default App;
