import {Link, NavLink} from "react-router-dom";
import logo from './logo.png';
const Header = () => {
    return (
        <>
            <nav className="p-1 flex justify-between bg-amber-100">
                    <ul className="flex items-center">
                        <Link to="/" className=""><img src={logo} alt="Logo" className="w-12 h-12 mx-1"/></Link>
                        <Link to="/" className="text-blue-900 text-2xl font-oswald font-semibold">JOURNEY</Link>
                        <Link to="/" className="text-yellow-500 text-2xl font-oswald font-semibold">BOARD</Link>
                    </ul>
                    <ul className="flex items-center gap-2">
                        <NavLink to="/blogs" className="mx-2">BLOGS</NavLink>
                        <NavLink to="/plan" className="mx-2">PLAN</NavLink>
                        <NavLink to="/about" className="mx-2">ABOUT</NavLink>
                        <NavLink to="/contact" className="mx-2">CONTACT</NavLink>
                        

                    </ul>

                    <ul className="float-right flex items-center gap-2">
                        <NavLink to="/login" className="mx-2">LOGIN</NavLink>
                        <NavLink to="/signup" className= "mx-2">REGISTER</NavLink>
                    </ul>
            </nav>
        </>
    );
}

export default Header;
