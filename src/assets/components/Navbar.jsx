import { Link } from "react-router-dom";
import "../../css/Navbar.css"

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie-app</Link>

        </div>
        <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>

}
export default Navbar