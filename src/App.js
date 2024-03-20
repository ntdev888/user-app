// src/App.js
import LoginForm from './components/LoginForm';
import SupportPlus from './components/SupportPlus';
import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [authToken, setAuthToken] = useState('');
  const [user, setUser] = useState('')

  const assignToAuthToken = (value) => {
     setAuthToken(value);
  };

  return (
    <div className={styles.App}>
      <div className={styles.appbox}>
      {authToken === '' ? <LoginForm setToken={assignToAuthToken} token={authToken} setUser={setUser}/> : <SupportPlus className={styles.component} authToken={authToken} user={user}/>}
      </div>
    </div>
  );
}

export default App;

