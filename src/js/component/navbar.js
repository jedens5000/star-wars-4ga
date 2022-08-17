import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import logo from "../../img/Star_Wars_logo.png";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const heart = <Icon icon="bi:heart-fill" className="text-danger" />;
  const dropDownTitle = <span>{heart} Favorites</span>;
  console.log(store.favorites.id);
  return (
    <nav className="navbar navbar-light bg-opacity-0 m-3">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <NavDropdown title={dropDownTitle} id="basic-nav-dropdown">
        {store.favorites.length > 0 ? (
          store.favorites.map((selected, i) => (
            <NavDropdown.Item key={i}>
              {/* NEED TO ADD LINK TO GO TO SINGLE PAGE FROM FAVORITES */}
              {/* <Link to={store.favorites[selected]}> */}
              {/* <Link to={store.storeName}> */}
              {/* <Button variant="border border-0"> */}
              {heart} &nbsp; {selected}
              {/* </Button> */}
              {/* </Link> */}
              {/* //////THIS REMOVES THE ITEM FROM THE FAVORITES LIST///////////////
              <Button
                className="float-right"
                variant="border border-0"
                onClick={() => actions.getFavorites(selected, i)}
              >
                <Icon icon="clarity:window-close-line" />
              </Button> */}
            </NavDropdown.Item>
          ))
        ) : (
          <NavDropdown.Item>You No Have Favorites</NavDropdown.Item>
        )}
      </NavDropdown>
    </nav>
  );
};
