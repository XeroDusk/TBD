import {Link, NavLink} from "react-router-dom";
import logo from './logo.png';
const Header = () => {
    return (
        <>
            <nav className="p-4 flex justify-between">
                    <ul className="flex items-center">
                        <Link to="/" className=""><img src={logo} alt="Logo" className="w-10 h-10 mx-1"/></Link>
                        <Link to="/" className="text-blue text-xl font-oswald font-semibold">JOURNEY</Link>
                        <Link to="/" className="text-yellow text-xl font-oswald font-semibold">BOARD</Link>
                    </ul>
                    <ul className="flex items-center gap-2">
                        <NavLink to="/blogs" className="mx-2">Blogs</NavLink>
                        <NavLink to="/about" className="mx-2">About</NavLink>
                        <NavLink to="/contact" className="mx-2">Contact</NavLink>

                    </ul>

                    <ul className="float-right flex items-center gap-2">
                        <NavLink to="/login" className="mx-2">Login</NavLink>
                        <NavLink to="/signup" className= "mx-2">Register</NavLink>
                    </ul>
            </nav>
        </>
    );
}

export default Header;
