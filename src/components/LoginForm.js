import React, { useState } from "react";
import styles from "../App.module.css";

const LoginForm = ({ setToken, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    //log user in from information input into login fields
    try {
      const response = await fetch("http://localhost:8080/api-token-auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Store the token in localStorage for future persistancy

      localStorage.setItem("token", data.token);
      // Use the prop function to update the authToken state in the parent component

      setToken(data.token);
      console.log("Login successful!");
      console.log(data.token); //development testing remove for application (NT)

      //successful login will execute UserID Lookup in auth table on Django
      const userInfoResponse = await fetch(
        "http://localhost:8080/api/get-user-id/?username=" +
          encodeURIComponent(username),
        {
          method: "GET",
          headers: {
            Authorization: `Token ${data.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!userInfoResponse.ok) {
        throw new Error("Failed to fetch user info");
      }

      const userData = await userInfoResponse.json();

      setUser(userData.user_id);
      console.log(`User ID set successfully! USERID : ${userData.user_id}`);
    } catch (err) {
      setError("Failed to login. Please check your username and password.");
      console.error(err);
    }
  };

  return (
    <div className={styles.loginbox}>
      <h3 className={styles.title}>Support Plus</h3>
      <form onSubmit={handleLogin} className={styles.login}>
        <div className={styles.inputs}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
        </div>
        <div className={styles.inputs}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
        </div>
        <br />
        {error && <p>{error}</p>}
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
