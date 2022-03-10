import React, { useState } from 'react'
import "./NavbarCss.css";
import { Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {

    const [showmedia, setshowmedia] = useState(false);
  return (
    <Nav className='shadow-lg lg:pl-10 lg:pr-5'>
        <Link to="/" className={"ml-5"}>
            <h1>Logo</h1>
        </Link>
        <Bars onClick={() => setshowmedia(!showmedia)} />
        <NavMenu className={showmedia ? "nav-links-mobile" : "nav-links" }>
             <Link to={""} >
                 About
             </Link>
             <Link to={""}>
                 Services
             </Link>
             <Link to={""}>
                 Contact
             </Link>
             <Link to={""}>
                 Sign Up
             </Link>
        </NavMenu>
        <NavBtn>
            <Link to={""}>
                 Login
             </Link>
             <NavBtnLink to={""}>
                Book your slot
             </NavBtnLink>
        </NavBtn>
    </Nav>
  )
}

export default Navbar;