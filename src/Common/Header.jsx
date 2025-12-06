import TopHeader from './TopHeader'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <TopHeader />
            <header className="page_header header_white  toggler_xs_right columns_margin_0">
                <Container>
                    <Row>
                        <Col sm={12} className=" display_table">
                            <div className="header_left_logo display_table_cell">
                                <Link to="/" className="logo logo_with_text">
                                    <img src="  /img/suramyaheaderlogo.svg" alt="" />
                                </Link>
                            </div>
                            <div className="header_mainmenu display_table_cell text-center m-auto ">
                                <nav className={`mainmenu_wrapper text-center mobile-menu d-flex justify-content-center ${menuOpen ? "active" : ""}`}>
                                    <ul className="mainmenu nav sf-menu">
                                        <li>
                                            <a href="/" onClick={closeMenu}>Home</a>
                                        </li>
                                        <li>
                                            <Link to="" onClick={closeMenu}>About Us</Link>
                                            <ul>
                                                <li><Link to="/about" onClick={closeMenu}>Who We Are</Link></li>
                                                <li><Link to="/leadergrid" onClick={closeMenu}>Our Leadership</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="/impact" onClick={closeMenu}>Our Impact</Link></li>
                                        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                                        <li><Link to="/viewevents" onClick={closeMenu}>Events</Link></li>
                                        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                                    </ul>

                                </nav>
                                {/* eof main nav */}
                                {/* header toggler */}
                                <span className="toggle_menu" onClick={toggleMenu}>
                                    <span />
                                </span>

                            </div>
                            <div className="header_right_buttons display_table_cell text-right hidden-xs">

                                <Link to="/donate" className="theme_button color2 margin_0">
                                    <FaHeart />  Donate us now!
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

        </>
    )
}

export default Header
