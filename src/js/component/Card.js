import React, { Component, getState } from "react";
import { Card, Button, Img } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Cards = (props, data, store) => {
  // const imgSrc =  'https://starwars-visualguide.com/assets/img/';
  const storeUrl = props.imgurl;
  console.log("This is storeUrl: " + storeUrl);
  // ///////THIS CUTS THE URL AFTER THE .COM ////////////////////////////
  // const cutUrl = new URL(storeUrl).pathname;
  // const storeName = cutUrl
  //   .substring(12, cutUrl.length - 3)
  //   .replace(/[^a-z]/gi, "");
  ///////////////////////////////////////////////////////////////////////
  // const storeName = props.imgurl.substring(5, props.imgurl.length).replace(/[^a-z]/gi, '');
  // const indexId = cutUrl.substring(14, cutUrl.length - 1);
  // const imgPath = cutUrl.substring(5, cutUrl.length - 1);
  // const imgUrl = imgSrc + imgPath + ".jpg";
  // const imgUrl = props.imgurl;
  // const id = cutUrl.substring(14, cutUrl.length - 1);
  // // //////CONSOLE CHECKS///////////////////////////////////////////////
  // console.log("This is the id: " + id);
  // console.log("This is imgurl: " + props.imgurl);
  // console.log("This is cutUrl: " + cutUrl);
  // console.log("This is storeName: " + storeName);
  // console.log("This is store: " + store);
  // console.log("This is imgPath: " + imgPath);
  // console.log("This is imgUrl: " + imgUrl);
  // console.log("This is indexId: " + indexId);
  // console.log("This is props url: " + props.url);
  // ///////END//////////////////////////////////////////////////////////

  //////////////FINDING ID - THIS WORKED FOR A WHILE////////////////////
  // const id = (parseInt(props.url))
  // console.log("This is the id: " + id);
  // ///////END//////////////////////////////////////////////////////////

  return (
    <>
      <Card className="bg-dark" style={{ width: "30rem" }}>
        {/* BELOW FIXES TATOOINE BY USING A FALLBACK IMG FOR BROKEN IMGS*/}
        <Card.Img
          variant="top"
          // src={imgUrl}
          src={props.imgurl}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_(fictional_desert_planet).jpg";
          }}
        />
        <Card.Body>
          <Card.Title>Name: {props.name}</Card.Title>
          <Card.Text>
            {
              <div>
                {console.log(data.next)}
                {/* <p>{props.url}</p> */}
                <p>
                  {props.population
                    ? `Population: ${props.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                    : ""}
                </p>
                <p>{props.climate ? `Climate: ${props.climate}` : ""}</p>
                <p>{props.terrain ? `Terrain: ${props.terrain}` : ""}</p>
                <p>
                  {props.surface_water
                    ? `Surface Water: ${props.surface_water}`
                    : ""}
                </p>
                <p>
                  {props.classification
                    ? `Classification: ${props.classification}`
                    : ""}
                </p>
                <p>{props.language ? `Language: ${props.language}` : ""}</p>
                <p>
                  {props.vehicle_class ? `Class: ${props.vehicle_class}` : ""}
                </p>
                <p>
                  {props.passengers ? `Passengers: ${props.passengers}` : ""}
                </p>
              </div>
            }
          </Card.Text>
          <Link to={`/planets/${props.id}`}>
            <Button
              className="bg-light text-primary"
              // href={imgPath}
              // href={storeName + '/' + props.id}

              variant="primary"
            >
              Learn more!
            </Button>
          </Link>
        </Card.Body>
      </Card>
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
  population: PropTypes.number,
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
