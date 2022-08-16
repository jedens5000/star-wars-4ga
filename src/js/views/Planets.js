import React, { useContext, useEffect, Component, Suspense } from "react";
import { Card, Spinner, Button, Col } from "react-bootstrap";
import { Context } from "../store/appContext"; //API access
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
// import injectContext from "../store/appContext";

export const Planet = (props) => {
  console.log(props);
  const { store, actions } = useContext(Context);
  console.log(store.planets); // WORKS
  const params = useParams();

  console.log(store.planets[params.theid - 1].population); // WORKS
  const id = store.planets[params.theid - 1]; // WORKS
  console.log(id); // WORKS
  console.log(id.name); // WORKS

  //START IMG CREATION/////////////////////////////////
  const imgSrc = "https://starwars-visualguide.com/assets/img/";
  const storeUrl = id.url;
  console.log("storeUrl: " + storeUrl);
  // ***********THIS CUTS THE URL AFTER THE .COM ******************
  const cutUrl = new URL(storeUrl).pathname;
  const storeName = cutUrl.substring(4, cutUrl.length).replace(/[^a-z]/gi, "");
  //*************THIS CREATES THE IMG URL**************************
  const imgId = cutUrl
    .substring(cutUrl.length - 3, cutUrl.length - 1)
    .replace(/\D/g, "");
  const imgUrl = imgSrc + storeName + "/" + imgId + ".jpg";
  console.log(imgUrl);
  //END IMG CREATION/////////////////////////////////

  // const {store, actions} = useContext(Context)

  // console.log(Context);
  // {Planets && Planets.map((item, index) => {})}
  // const { id } = useParams();
  //   const foundItem = store.planets && store.planets.filter((item) => {item.id === id})

  return (
    <div>
      <div className="card mb-3 bg-dark position-absolute top-50 start-50 translate-middle">
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img
              variant="top"
              src={imgUrl}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_(fictional_desert_planet).jpg";
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Card.Title>{id.name}</Card.Title>
              <p className="card-text">
                Lucas ipsum dolor sit amet organa luuke droid mandalorians
                dagobah luke lando lando zabrak sidious. Skywalker calamari
                chewbacca wicket mace. Yoda hutt dagobah fisto jango dooku
                secura. Ponda wedge coruscant mustafar calrissian c-3p0
                skywalker darth yavin. Calamari lobot chewbacca skywalker. Hutt
                padmé darth aayla utapau owen. Bespin coruscant hutt hutt wampa
                leia. Wedge hutt jade qui-gon coruscant. Amidala darth
                calrissian sebulba yavin vader boba dantooine moff. Yavin hutt
                lobot antilles organa wicket luke jade.
              </p>
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>
            <span>
              Population:{" "}
              {id.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} |{" "}
            </span>
            <span>Climate: {id.climate} | </span>
            <span>Terrain: {id.terrain}</span>
            <span class="break">Surface Water: {id.surface_water}% | </span>
            <span>Rotation Period: {id.rotation_period} hrs | </span>
            <span>Orbital Period: {id.orbital_period} days</span>
            <div>
              <Link to={"/"}>
                <Button className="mt-3 bg-light text-primary">
                  Return Home
                </Button>
              </Link>
            </div>
          </Card.Text>
        </Card.Body>
      </div>
    </div>
  );
};

Planet.propTypes = {
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
};

export default Planet;
