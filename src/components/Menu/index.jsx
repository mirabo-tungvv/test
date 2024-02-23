import { Link } from "react-router-dom";
import "./style.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/about">
        About
      </Link>
      <Link className="button" to="/person">
        Person
      </Link>
    </div>
  );
};

export default Menu;
