import logo from "../../assets/images/aribnb-logo.svg";
import grid from "../../assets/images/grid.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="logo" />
      </div>

      <img src={grid} className="grid" />
    </header>
  );
}

export default Header;
