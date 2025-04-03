import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-content">
        <div className="logo-section">
          <Link to="/dashboard">
            <div className="logo-part"></div>
          </Link>
          <h3 className="welcome-text">Welcome User!</h3>
        </div>

        <div className="links">
          <div className="link-item">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="link-item">
            <Link to="/products">Products</Link>
          </div>
          <div className="link-item">
            <Link to="/stocks">Stocks</Link>
          </div>
          <div className="link-item">
            <Link to="/sales">Sales</Link>
          </div>
          <div className="link-item">
            <Link to="/account">Account</Link>
          </div>
          <div className="link-item">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
