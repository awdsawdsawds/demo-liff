import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [profile, setProfile] = useState({})
  window.liff.init()
    .then(() => {
      // TODO: implement this
      console.log('success')
    })
    .catch((error) => {
      // TODO: implement this
      console.error(error)
    })

    const getProfileFromLine = async () => {
      const dataInfo = await window.liff.getProfile()
      setProfile(dataInfo)
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Profile: { JSON.stringify(profile) }
        </p>
        <button
          className="App-link"
          onClick={getProfileFromLine}
        >
          Get Profile
        </button>
      </header>
    </div>
  );
}

export default App;
