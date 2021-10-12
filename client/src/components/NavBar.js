import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './styles/NavBar.css'

function NavBar({ displayHandler }) {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const toogleNav = () => {
        setClick(!click)
    }
    const closeNav = () => {
        setClick(false)
    }

    useEffect(() => {
        if (click) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [click])

    return (
        <>
            <div className="navbar_container">
                <div className="navbar nav_mobile">
                    <Link to="/">
                        <img
                            className="navbar_logo"
                            src="/assets/Group6@2x.png"
                            alt="logo"
                        />
                    </Link>
                    <ul className={click ? "navbar_right active" : "navbar_right"}>
                        <li className="d-lg-none">
                            <Link to="/" onClick={closeNav} >
                                Home
                            </Link>
                        </li>
                        <li onClick={() => setDropdown(!dropdown)}>
                            <div className="cursor menu_services">Services <i className="bi bi-chevron-down"></i></div>
                            <div className="services_dropdown" style={{ display: dropdown ? "" : "none" }}>
                                <li><Link to="/service/photography" onClick={closeNav}>Photography</Link></li>
                                <li><Link to="/service/graphic design" onClick={closeNav}>Graphic Design</Link></li>
                                <li><Link to="/service/cinematography" onClick={closeNav}>Cinematography</Link></li>
                                <li><Link to="/service/motion graphics" onClick={closeNav}>Motion Graphics</Link></li>
                                <li><Link to="/service/ui design" onClick={closeNav}>Ui Design</Link></li>
                            </div>
                        </li>
                        <li>
                            <Link to="/about us" onClick={closeNav} >
                                About us
                            </Link>
                        </li>
                        <li>
                            <button className="btn_contact d-none d-lg-block" onClick={displayHandler}>
                                Contact Us
                            </button>
                            <Link className="d-lg-none" onClick={displayHandler} >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <span onClick={toogleNav} className="hamburgerMenu d-inline d-md-none">{click ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</span>
                </div>
            </div>
        </>
    )
}

export default NavBar
