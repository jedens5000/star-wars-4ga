import React, { useContext, useEffect, Component, Suspense } from "react";
import { Card, Spinner, Button, Col } from "react-bootstrap";
import { Context } from "../store/appContext"; //API access
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import error404 from "../../img/404errorStarWars.png";

export const Specie = (props) => {
  console.log(props);
  const { store, actions } = useContext(Context);
  console.log(store.species); // WORKS
  const params = useParams();

  console.log(store.species[params.theid - 1].population); // WORKS
  const id = store.species[params.theid - 1]; // WORKS
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
                currentTarget.src = { error404 };
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
            <span>Language: {id.language} | </span>
            <span>Classification: {id.classification} | </span>
            <span>Designation: {id.designation}</span>
            <span class="break">
              Average Lifespan: {id.average_lifespan} years |{" "}
            </span>
            <span>Average Height: {id.average_height} cm</span>
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

Specie.propTypes = {
  id: PropTypes.integer,
  name: PropTypes.string,
  classification: PropTypes.string,
  designation: PropTypes.string,
  average_height: PropTypes.string,
  skin_colors: PropTypes.string,
  hair_colors: PropTypes.string,
  eye_colors: PropTypes.string,
  average_lifespan: PropTypes.string,
  // homeworld: PropTypes.string,
  language: PropTypes.string,
};

export default Specie;
