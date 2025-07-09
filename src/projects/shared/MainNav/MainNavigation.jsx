import { Link } from "react-router-dom";
import "./index.css";

function MainNavigation() {
  return (
    <div className="nav">
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ReactEssentials">ReactEssentials</Link>
            </li>
            <li>
              <Link to="/TikTakToe">Tik-Tak-Toe</Link>
            </li>
            <li>
              <Link to="/InvestmentCalculator">Investment Calculator</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
