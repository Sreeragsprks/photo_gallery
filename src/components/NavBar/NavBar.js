import React from "react";
import { UserContext } from "../../App";
import "./NavBar.css";

export const NavBar = ({ handleLogout }) => {
  const { userName } = React.useContext(UserContext);
  return (
    <header className="header-container">
      <div>
        {/* Need to update based on user name */}
        <p>Welcome {userName ? userName : "Guest"} </p>
      </div>
      {/* Need to show only wwhen user has logged in */}
      {userName ? (
        <div>
          <p onClick={handleLogout}>Logout</p>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
