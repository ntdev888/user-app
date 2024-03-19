
import React , {useState} from 'react';
import styles from '../App.module.css'; // Adjust the import path as needed

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api-token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      };

      const data = await response.json();
      // Store the token in localStorage for simplicity
      localStorage.setItem('token', data.token);
      // Use the prop function to update the authToken state in the parent component
      setToken(data.token);
      console.log('Login successful!');
      console.log(data.token);
    } catch (err) {
      setError('Failed to login. Please check your username and password.');
      console.error(err);
    }
  };

  return (
    <div>
      <h3 className={styles.title}>Support Plus</h3>
    <form onSubmit={handleLogin} className={styles.login}>
      <div className={styles.inputs}>
        <label>Username:</label><br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>
      </div>
      <div className={styles.inputs}>
        <label>Password:</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
      </div><br />
      {error && <p>{error}</p>}
      <button className={styles.submit} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default LoginForm;
