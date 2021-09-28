import React from "react";
import "./Login.css";

export const Login = ({ handleLogin }) => {
  const [userName, setUserName] = React.useState("");

  const handleUserName = (e) => setUserName(e.target.value);

  const handleUserLogin = () => handleLogin(userName);

  return (
    <div className="login-container">
      <input type="text" value={userName} onChange={(e) => handleUserName(e)} />
      <button type="button" onClick={handleUserLogin}>
        Login
      </button>
    </div>
  );
};
