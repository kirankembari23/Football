import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Navbar.css';
import logo from './../../Assets/brand.svg'
import { Link } from 'react-router-dom';


export default class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <Navbar dark expand="md">
          <img src={logo} alt="logo" className="brandLogo"/>
          <NavbarBrand href="/" className="mr-auto brand">BarcaLoverz</NavbarBrand>
            <Nav  className="navigationBar">
              <NavItem className="navItem">
               Home 
              </NavItem>
              <NavItem className="navItem">
               Matches
              </NavItem>
              <NavItem className="navItem">
                 Aboutme
              </NavItem>
            </Nav>
        </Navbar> */}
        <header className="main-navigation payment-header">
            <div className="container">
            <div className="row">

            <div className="col-4">

            <img src={logo} alt="logo" className="brandLogo"/>
          <NavbarBrand href="/" className="mr-auto brand">BarcaLoverz</NavbarBrand>
          </div>
          <div className="col-4">
</div>
<div className="col-4">
</div>
</div>
            </div>
        </header>
      </div>
    );
  }
}
  