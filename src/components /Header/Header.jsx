import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div>
        <h1>Games 4 U</h1>
      </div>
      <div className="options">
        <a href="">Games</a>
        <a href="">Users</a>
      </div>
    </header>
  );
}

export default Header;
