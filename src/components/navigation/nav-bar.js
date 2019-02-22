import React, { Component } from "react";

export default function () {
        return (
            <div>

            <NavLink excact to ="/" activeClassName="nav-link-active">
             Home
            </NavLink>

            <NavLink  to ="/about-me" activeClassName="nav-link-active">
             About
            </NavLink>

            <NavLink  to ="/contact" activeClassName="nav-link-active">
             Contact
            </NavLink>

            <NavLink  to ="/blog" activeClassName="nav-link-active">
             Counter
            </NavLink>


            </div>
        );
    }   