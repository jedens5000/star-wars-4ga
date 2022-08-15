import React, { useContext, useEffect, Component, Suspense } from "react";
import { Card, Spinner, Button, Col } from "react-bootstrap";
import { Context } from "../store/appContext"; //API access
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
// import injectContext from "../store/appContext";

export const Planet = (props) => {
  console.log(props.name);
  const { store, actions } = useContext(Context);
  console.log(store.planets); // WORKS
  // console.log(store.planets.id); // WORKS
  const params = useParams();

  // console.log(store.planets[params.theid].population);

  // useEffect(() => {
  //   actions.getPlanets();
  //   // actions.getStore().planets;
  //   // actions.getPlanetId();
  // }, []);

  console.log(store.planets[params.theid - 1].population); // WORKS
  const id = store.planets[params.theid - 1]; // WORKS
  console.log(id);
  console.log(id.name);

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
  //   console.log(foundItem);
  // console.log(id); //THIS WORKS
  console.log(store.planets); //THIS WORKS TO BRING IN ARRAY ON 3RD TRY
  // console.log(store.planets[id]);
  // console.log(store.planets[id - 1]);
  // console.log(name); //RETURNS undefined
  // console.log(planets.name); //BREAKS IT
  // console.log(store.planets.name); //RETURNS undefined
  // console.log(store.planets[id].name); //THIS DID WORK, BUT BREAKS NOW
  // console.log(store.planets[terrain]); //BREAKS IT
  // const Planet = getPlanets()
  // console.log(Planet);
  return (
    <div>
      <div className="flex-row d-flex w-100 overflow-scroll">
        {/* {store.planets.map((planet, i) => {
          return ( */}
        <div>
          {/* <Cards key={planet.id} name={planet.name} population={planet.population} climate={planet.climate} url={planet.url.replace(/\D/g,'')} /> */}
          {/* <PlanetCard */}
          {/* <PlanetCard
            key={planet.uid}
            name={planet.name}
            population={planet.population}
            climate={planet.climate}
            surface_water={planet.surface_water}
            url={planet.url}
            id={planet.id}
          /> */}
        </div>
        {/* );
        })} */}
      </div>

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
              <h5 className="card-title">{id.name}</h5>
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
          {/* <Card.Title>{id} {props.name}</Card.Title> */}
          {/* <Card.Title>{id}{name}{climate}</Card.Title> */}
          {/* <Card.Title>{props.planets.id}</Card.Title> */}
          <Card.Text style={{ textAlign: "center" }}>
            <span>
              Population:{" "}
              {id.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} |{" "}
            </span>
            <span>Climate: {id.climate} | </span>
            <span>Terrain: {id.terrain} | </span>
            <span>Surface Water: {id.surface_water}%</span>
          </Card.Text>
          <Link to={"/"}>
            <Button className="button-return">Return Home</Button>
          </Link>
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

// export default injectContext(Planets);
export default Planet;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Planets = (props) => {
//   const { store, actions } = useContext(Context);
//   const params = useParams();
//   return (
//     <div>
//       <div className="jumbotron mx-5">
//         <div className="row d-flex justify-content-around">
//           <div className="col-6 d-flex justify-content-end">
//             <img src="https://placehold.jp/600x400.png" alt=""></img>
//           </div>
//           <div className="col-6 d-flex justify-content-center align-items-center">
//             <h1 className="display-4">{store.planets[params.theid].name}</h1>
//           </div>
//         </div>

//         <p className="lead">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
//           nunc sed id semper risus in hendrerit gravida. Amet aliquam id diam
//           maecenas ultricies mi eget mauris pharetra. Mauris nunc congue nisi
//           vitae. Sed turpis tincidunt id aliquet risus feugiat. Iaculis urna id
//           volutpat lacus laoreet non curabitur gravida. Pulvinar mattis nunc sed
//           blandit libero volutpat. Magna eget est lorem ipsum dolor sit. Nunc
//           pulvinar sapien et ligula. Porttitor leo a diam sollicitudin tempor.
//           Mattis vulputate enim nulla aliquet porttitor lacus luctus. In massa
//           tempor nec feugiat nisl pretium fusce id velit. Sit amet dictum sit
//           amet justo. Nulla aliquet enim tortor at auctor urna. Tortor posuere
//           ac ut consequat semper viverra nam libero justo. Aliquam nulla
//           facilisi cras fermentum odio eu feugiat.
//         </p>
//         <hr className="my-4"></hr>
//         <div className="row">
//           <div className="col-2 text-center">Population</div>
//           <div className="col-2 text-center">Climate</div>
//           <div className="col-2 text-center">Terrain</div>
//           <div className="col-2 text-center">Diameter</div>
//           <div className="col-2 text-center">Gravity</div>
//           <div className="col-2 text-center">Orbital Period</div>
//         </div>
//         <div className="row">
//           <div className="col-2 text-center">
//             {store.planets[params.theid].population}
//           </div>
//           <div className="col-2 text-center">
//             {store.planets[params.theid].climate}
//           </div>
//           <div className="col-2 text-center">
//             {store.planets[params.theid].terrain}
//           </div>
//           <div className="col-2 text-center">
//             {store.planets[params.theid].diameter}
//           </div>
//           <div className="col-2 text-center">
//             {store.planets[params.theid].gravity}
//           </div>
//           <div className="col-2 text-center">
//             {store.planets[params.theid].orbital_period}
//           </div>
//         </div>
//         <br></br>
//         <p className="lead my-3 text-center">
//           <Link to="/">
//             <span className="btn btn-primary btn-lg" href="#" role="button">
//               Back home
//             </span>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// Planets.propTypes = {
//   match: PropTypes.object,
// };
