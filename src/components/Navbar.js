import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Exams</Link></li>
        <li><Link to="/timer">Timer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
