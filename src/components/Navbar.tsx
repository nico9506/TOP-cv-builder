import idIcon from "../assets/idIcon.svg";
import printIcon from "../assets/printIcon.svg";
import "../styles/Navbar.css";
import handlePrint from "../PrintResume";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoIcon" src={idIcon} />
      <h1 className="appName">CV Generator</h1>
      <button className="printBtn" onClick={handlePrint}>
        <img src={printIcon} />
      </button>
    </nav>
  );
};

export default Navbar;
