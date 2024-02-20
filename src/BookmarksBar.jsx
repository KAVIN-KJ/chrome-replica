import React from "react";
import Bookmark from "./Bookmark";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import './Styles/BookmarksBar.css'
import Contact from "./Contact";
function BookmarksBar(){
   const NavlinkStyle = {textDecoration : "none",color:"black"}
    return(
        <div className="bookmarksbar">
            <NavLink style={NavlinkStyle} activeClassName="activeNav" to='/Home'><Bookmark text="Home"/></NavLink>
            <NavLink style={NavlinkStyle} activeClassName="activeNav" to='/About'><Bookmark text="About"/></NavLink>
            <NavLink style={NavlinkStyle} activeClassName="activeNav" to='/Contact'><Bookmark text="Contact us"/></NavLink>

        </div>
    )
}

export default BookmarksBar