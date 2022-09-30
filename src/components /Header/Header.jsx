import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <h1>Games 4 U</h1>
        </Link>
      </div>
      <div className="options">
        <Link to="/reviews">
          <p>Games</p>
        </Link>
        <Link>
          <p>Users</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
