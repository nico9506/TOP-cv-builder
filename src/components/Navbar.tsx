import idIcon from "../assets/idIcon.svg";
import restartIcon from "../assets/restartIcon.svg";
import printIcon from "../assets/printIcon.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoIcon" src={idIcon} />
      <h1 className="appName">CV Generator</h1>
      <button className="resetBtn">
        <img src={restartIcon} />
      </button>
      <button className="printBtn">
        <img src={printIcon} />
      </button>
    </nav>
  );
};

export default Navbar;
