import React, { useState } from 'react'
import "./NavbarCss.css";
import { Nav,NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {

    const [showmedia, setshowmedia] = useState(false);
  return (
    <Nav className='shadow-lg lg:pl-10 lg:pr-5'>
        <NavLink to="/" className={"ml-5"}>
            <h1>Logo</h1>
        </NavLink>
        <Bars onClick={() => setshowmedia(!showmedia)} />
        <NavMenu className={showmedia ? "nav-links-mobile" : "nav-links" }>
             <NavLink to={""} >
                 About
             </NavLink>
             <NavLink to={""}>
                 Services
             </NavLink>
             <NavLink to={""}>
                 Contact
             </NavLink>
             <NavLink to={""}>
                 Sign Up
             </NavLink>
        </NavMenu>
        <NavBtn>
            <NavLink to={""}>
                 Login
             </NavLink>
             <NavBtnLink to={""}>
                Book your slot
             </NavBtnLink>
        </NavBtn>
    </Nav>
  )
}

export default Navbar;