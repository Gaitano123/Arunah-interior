import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "./images/pexels-fotoaibe-1571460.jpg";

function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState("fa-solid fa-bars menu");

    // Toggle menu and update icon
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    useEffect(() => {
        if (menuOpen) {
            setMenuIcon("fa-solid fa-x menu"); // Show 'X' icon when menu is open
            document.documentElement.style.overflow = "hidden"; // Prevent scrolling
        } else {
            setMenuIcon("fa-solid fa-bars menu"); // Show 'bars' icon when menu is closed
            document.documentElement.style.overflow = "auto"; // Restore scrolling
        }
    
        return () => {
            document.documentElement.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [menuOpen]);
    

    return (
        <div className={menuOpen ? "bg-gb absolute top-0 left-0 border-none w-full h-[9em] max-lg:h-[7em] z-50 text-primary shadow-md flex items-center capitalize font-heading" : "absolute top-0 left-0 w-full h-[9em] max-lg:h-[7em] z-50 backdrop-blur-[1em] text-primary shadow-md flex items-center capitalize font-heading"}>
            {/* Menu Icon */}
            <i className={menuIcon} onClick={toggleMenu}></i>

            {/* Desktop Navigation */}
            <ul className="flex items-center p-[2em] max-lg:p-[1em] max-md:hidden">
                <li><NavLink className="pr-[2em] max-lg:pr-[1em] focus:underline focus:underline-offset-5" to='/our-services'>our services</NavLink></li>
                <li><NavLink className="pr-[2em] max-lg:pr-[1em] focus:underline focus:underline-offset-5" to='/our-story'>about us</NavLink></li>
                <li><NavLink className="pr-[2em] max-lg:pr-[1em] focus:underline focus:underline-offset-5" to='/portfolio'>portfolio</NavLink></li>
                <li><NavLink className="pr-[2em] max-lg:pr-[1em] focus:underline focus:underline-offset-5" to='/contact'>contact us</NavLink></li>
            </ul>

            {/* Logo */}
            <img className="h-[7em] w-[7em] max-lg:h-[5em] max-lg:w-[5em] max-md:hidden object-cover absolute top-0 left-[50%] max-md:left-50% mt-[1em]" onClick={() => { navigate("/"); }} src={img} />

            {/* Mobile Navigation */}
            <div className="min-md:hidden">
            <ul
  className={`absolute top-[7em] left-0 w-full h-screen flex flex-col pt-[7em] items-center bg-gb transition-all duration-700 ease-in-out ${
    menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible"
  }`}
  onClick={toggleMenu}
>
                    <li><NavLink className="pr-0 pb-[5em] text-[2.5em]" to='/our-services'>our services</NavLink></li>
                    <li><NavLink className="pr-0 pb-[5em] text-[2.5em]" to='/our-story'>about us</NavLink></li>
                    <li><NavLink className="pr-0 pb-[5em] text-[2.5em]" to='/portfolio'>portfolio</NavLink></li>
                    <li><NavLink className="pr-0 pb-[5em] text-[2.5em]" to='/contact'>contact us</NavLink></li>
                </ul>
                <img className="h-[7em] w-[7em] max-lg:h-[5em] max-lg:w-[5em] object-cover absolute top-0 left-[50%] max-md:left-50% mt-[1em]" onClick={() => { navigate("/"); setMenuOpen(false); }} src={img} />
            </div>
        </div>
    );
}

export default Navbar;
