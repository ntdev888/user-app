// src/App.js
import LoginForm from './components/LoginForm';
import SupportPlus from './components/SupportPlus';
import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [authToken, setAuthToken] = useState('');

  const assignToAuthToken = (value) => {
     setAuthToken(value);
  };

  return (
    <div className={styles.App}>
      <div className={styles.appbox}>
      {authToken === '' ? <LoginForm className={styles.appbox} setToken={assignToAuthToken}/> : <SupportPlus authToken={authToken}/>}
      </div>
    </div>
  );
}

export default App;

