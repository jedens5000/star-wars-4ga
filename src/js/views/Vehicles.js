import React, { useContext, useEffect, Component, Suspense } from "react";
import { Card, Spinner, Button, Col } from "react-bootstrap";
import { Context } from "../store/appContext"; //API access
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

export const Vehicle = (props) => {
  console.log(props);
  const { store, actions } = useContext(Context);
  console.log(store.vehicles); // WORKS
  const params = useParams();

  const id = store.vehicles[params.theid - 1]; // WORKS
  console.log(id); // WORKS
  // console.log(id.name); // WORKS

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
            <span>Model: {id.model} | </span>
            <span>Manufacturer: {id.manufacturer} | </span>
            <span>Cost: {id.cost_in_credits} credits</span>
            <span class="break">Length: {id.length} | </span>
            <span>Max. Speed: {id.max_atmosphering_speed} | </span>
            <span>Crew: {id.crew} | </span>
            <span>Passengers: {id.passengers}</span>
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

Vehicle.propTypes = {
  id: PropTypes.integer,
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

export default Vehicle;
