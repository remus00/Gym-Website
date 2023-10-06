import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo" />
            {menuOpen === false && mobile === true ? (
                <div className="mobile-div" onClick={() => setMenuOpen(true)}>
                    <img src={Bars} alt="bars" className="mobile-img" />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="hero"
                            span={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="programs"
                            span={true}
                            smooth={true}
                        >
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="reasons"
                            span={true}
                            smooth={true}
                        >
                            Why us
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="plans"
                            span={true}
                            smooth={true}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="testimonials"
                            span={true}
                            smooth={true}
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Header;
