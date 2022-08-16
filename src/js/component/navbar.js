import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown, Button, Placeholder } from "react-bootstrap";
import { Context } from "../store/appContext";
import logo from "../../img/Star_Wars_logo.png";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const heart = <Icon icon="bi:heart-fill" className="text-danger" />;
  const dropDownTitle = <span>{heart} Favorites</span>;
  return (
    <nav className="navbar navbar-light bg-opacity-0 m-3">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <NavDropdown title={dropDownTitle} id="basic-nav-dropdown">
        {store.favorites.length > 0 ? (
          store.favorites.map((selected, i) => (
            //     <Dropdown.Item
            //       className="d-flex justify-content-end"
            //       href="#/action-1"
            //       key={i}
            //     >
            //       {selected}
            //       <Placeholder xs={1} variant="light" />
            //       <Button
            //         className="float-right"
            //         variant="danger"
            //         onClick={() => actions.getFavorites(selected, i)}
            //       >
            //         <i className="fas fa-trash-alt" />
            //       </Button>
            //     </Dropdown.Item>
            //   ))
            // ) : (
            //   <DropdownItem>There are no favorites</DropdownItem>
            // )}
            <NavDropdown.Item href="#/action-1" key={i}>
              {heart} {selected}
              {/* <Placeholder xs={1} variant="light" /> */}
              <Button
                className="float-right"
                variant="danger"
                onClick={() => actions.getFavorites(selected, i)}
              >
                <Icon icon="clarity:window-close-line" />
              </Button>
            </NavDropdown.Item>
          ))
        ) : (
          <NavDropdown.Item>Favorites You No Have</NavDropdown.Item>
        )}
        {/* <NavDropdown.Item href="#action/3.1">
          {heart} Favorite1 <Icon icon="clarity:window-close-line" />
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          {heart} Favorite2 <Icon icon="clarity:window-close-line" />
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          {heart} Favorite3 <Icon icon="clarity:window-close-line" />
        </NavDropdown.Item> */}
      </NavDropdown>
    </nav>
  );
};
