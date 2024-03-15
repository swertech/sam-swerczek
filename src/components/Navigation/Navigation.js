import "./Navigation.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/schedule">
            Schedule
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
