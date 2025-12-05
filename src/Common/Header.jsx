import React from 'react'
import TopHeader from './TopHeader'
import { Col, Container, Row } from 'reactstrap'
import { Link} from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <TopHeader />
            <header className="page_header header_white  toggler_xs_right columns_margin_0">
                <Container>
                    <Row>
                        <Col sm={12} className=" display_table">
                            <div className="header_left_logo display_table_cell">
                                <Link to="/" className="logo logo_with_text">
                                    <img src="/public/img/suramyaheaderlogo.svg" alt="" />
                                </Link>
                            </div>
                            <div className="header_mainmenu display_table_cell text-center m-auto ">
                                <nav className="mainmenu_wrapper text-center d-flex justify-content-center">
                                    <ul className="mainmenu nav sf-menu">
                                        <li className="">

                                            <a href="/">Home</a>

                                        </li>
                                        <li>
                                            <Link to={''}>About Us </Link>
                                            <ul>
                                                <li> <Link to="/about">Who We Are</Link> </li>
                                                <li> <Link to="/leadergrid">Our Leadership</Link> </li>
                                                {/* <li> <Link to="/impact">Home single page</Link> </li> */}
                                            </ul>
                                        </li>
                                        <li>

                                            <Link to="/impact">Our Impact </Link>
                                        </li>
                                        <li>

                                            <Link to="/gallery">Gallery</Link>
                                        </li>
                                        <li>

                                            <a href="/viewevents">Events</a>
                                        </li>

                                        <li>

                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* eof main nav */}
                                {/* header toggler */}
                                <span className="toggle_menu">
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
