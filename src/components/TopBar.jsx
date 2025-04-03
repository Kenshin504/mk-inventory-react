import "../styles/nav.css";
import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

function TopBar() {
  const { imageSrc, fullName } = useContext(UserContext); // Access context

  return (
    <div className="nav-top">
      <div className="top-content">
        <div className="inventory-name">MK Inventory Ledger</div>
        <div className="user_top-bar">
          <div className="user-dropdown">
            <button className="user-settings">
              <img
                src={imageSrc} // Use imageSrc from context
                className="user-logo"
                alt="User Avatar"
              />
            </button>
            <div className="dropdown-content">
              <a href="/account">Edit Profile</a>
              <a href="/">Log Out</a>
            </div>
          </div>
          <b>{fullName}</b> {/* You can display other user data here */}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
