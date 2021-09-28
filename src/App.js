import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import { PhotoList } from "./components/Photos/PhotoList";
import "./App.css";

export const UserContext = React.createContext("");

function App() {
  const [userName, setUserName] = React.useState("");

  const handleLogin = (loggedInUser) => {
    setUserName(loggedInUser);
  };

  const handleLogout = () => {
    setUserName("");
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ userName }}>
        <NavBar handleLogout={handleLogout} />
      </UserContext.Provider>
      <div className="main-segment">
        {userName === "" ? <Login handleLogin={handleLogin} /> : <PhotoList />}
      </div>
    </div>
  );
}

export default App;
