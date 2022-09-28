import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/reviews">
          <h1>Games 4 U</h1>
        </Link>
      </div>
      <div className="options">
        <a href="">Games</a>
        <a href="">Users</a>
      </div>
    </header>
  );
}

export default Header;
