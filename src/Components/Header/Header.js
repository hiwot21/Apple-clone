import React from 'react'
import logo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";
import HeaderLink from "./HeaderLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
      <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
        <div className="container">
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">
              <img src={logo} alt="" />
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-justified w-100 nav-fill">
                <Nav.Link className="nav-link" href="/mac">
                  Mac
                </Nav.Link>
                <Nav.Link href="/iphone">iphone</Nav.Link>
                <Nav.Link href="/ipad">ipad</Nav.Link>
                <Nav.Link href="/watch">watch</Nav.Link>
                <Nav.Link href="/tv">tv</Nav.Link>
                <Nav.Link href="/music">Music</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
                <Nav.Link href="/search">
                  <img src={search} alt="" />
                </Nav.Link>
                <Nav.Link href="/cart">
                  <img src={cart} alt="" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
}

export default Header
