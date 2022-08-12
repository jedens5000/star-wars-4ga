import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../../img/Star_Wars_logo.png";
// import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'

export const Navbar = () => {
  // const heart = (`className="fa fa-heart text-danger"`);
  return (
    <nav className="navbar navbar-light bg-opacity-0 m-3">
      <Link to="/">
        <img
          className="logo"
          // src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
          src={logo}
        />
      </Link>
      {/* <NavDropdown className="fa fa-heart text-danger" title="♥ Favorites" id="basic-nav-dropdown">				 */}
      {/* <NavDropdown className="material-symbols-outlined"  title="favorite FAVORITES" id="basic-nav-dropdown"> */}
      <NavDropdown title="Favorites" id="basic-nav-dropdown">
        {/* <i className="fa fa-heart text-danger" /> */}
        <NavDropdown.Item href="#action/3.1">Favorite1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Favorite2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Favorite3</NavDropdown.Item>
      </NavDropdown>
      {/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div> */}
    </nav>
  );
};
