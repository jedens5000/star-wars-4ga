import React, { Component, getState } from "react";
import { Card, Button, Img } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Cards = (props, data, store) => {
  const imgSrc = "https://starwars-visualguide.com/assets/img/";
  // console.log(props);
  const storeUrl = props.url;
  console.log("storeUrl: " + storeUrl);
  // ***********THIS CUTS THE URL AFTER THE .COM ******************
  const cutUrl = new URL(storeUrl).pathname;
  let storeName = cutUrl.substring(4, cutUrl.length).replace(/[^a-z]/gi, "");

  //*************THIS CREATES THE IMG URL**************************
  const id = cutUrl
    .substring(cutUrl.length - 3, cutUrl.length - 1)
    .replace(/\D/g, "");
  const imgUrl = imgSrc + storeName + "/" + id + ".jpg";

  // ////////CONSOLE CHECKS//////////////////////////////////////
  console.log("This is the id: " + id);
  console.log("This is storeName: " + storeName);
  console.log("This is imgUrl: " + imgUrl);
  console.log("This is cutUrl: " + cutUrl);

  return (
    <>
      <div className="d-flex justify-content-between">
        <Link to={"/" + storeName + "/" + id}>
          <Button className="bg-light text-primary" variant="primary">
            Learn more!
          </Button>
        </Link>
        {/* ADD TO FAVORITES */}
        <Button
          className="bg-light text-primary"
          variant="primary"
          onClick={() => actions.getFavorites(props.name)}
        >
          <Icon icon="bi:heart" className="text-danger" /> Add to Favorites
        </Button>
        {/* REMOVE FOR FAVORITES */}
        <Button
          className="bg-light text-primary"
          variant="primary"
          onClick={() => actions.getFavorites(props.name)}
        >
          <Icon icon="bi:heart-fill" className="text-danger" /> Remove Favorite
        </Button>
      </div>
    </>
  );
};
Cards.propTypes = {
  // PLANETS:
  id: PropTypes.integer,
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surface_water: PropTypes.string,
  // population: PropTypes.number,
  population: PropTypes.string,
  url: PropTypes.string,
  imgurl: PropTypes.string,
  // SPECIES:
  classification: PropTypes.string,
  designation: PropTypes.string,
  average_height: PropTypes.string,
  skin_colors: PropTypes.string,
  hair_colors: PropTypes.string,
  eye_colors: PropTypes.string,
  average_lifespan: PropTypes.string,
  homeworld: PropTypes.string,
  language: PropTypes.string,
  // PEOPLE:
  id: PropTypes.integer,
  name: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  eye_color: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string,
  // VEHICLES:
  model: PropTypes.string,
  manufacturer: PropTypes.string,
  cost_in_credits: PropTypes.string,
  length: PropTypes.string,
  max_atmosphering_speed: PropTypes.string,
  crew: PropTypes.string,
  passengers: PropTypes.string,
  cargo_capacity: PropTypes.string,
  consumables: PropTypes.string,
  vehicle_class: PropTypes.string,
  // STARSHIPS (+ same as vehicle props above):
  hyperdrive_rating: PropTypes.string,
  MGLT: PropTypes.string,
  starship_class: PropTypes.string,
};
