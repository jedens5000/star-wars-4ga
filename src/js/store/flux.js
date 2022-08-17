import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // apiURL: process.env.BACKEND_URL_DEVAPI,
      apiURL: process.env.BACKEND_URL_PY4EAPI, // Faster than DEVAPI
      species: [],
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      ////////////////////API Fetch///////////////////////////////
      getPlanets: () => {
        fetch(getStore().apiURL + "/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({
              planets: data.results,
            });
          })
          .then(() => console.log(getStore().planets));
      },
      getSpecies: () => {
        fetch(getStore().apiURL + "/species/")
          .then((res) => res.json())
          .then((data) => {
            setStore({
              species: data.results,
            });
          })
          .then(() => console.log(getStore().species));
      },
      getPeople: () => {
        fetch(getStore().apiURL + "/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({
              people: data.results,
            });
          })
          .then(() => console.log(getStore().people));
      },
      // ///////////FAVORITES//////////
      getFavorites: (item) => {
        console.log(item);
        let myFavorites = getStore().favorites;
        let selected = myFavorites.find((element) => element === item);
        if (selected) {
          myFavorites = myFavorites.filter((element) => item !== element);
          setStore({ favorites: myFavorites });
        } else {
          myFavorites = [...myFavorites, item];
          setStore({ favorites: myFavorites });
        }
      },

      // getVehicles: () => {
      //   fetch(getStore().apiURL + "/vehicles/")
      //     .then((res) => res.json())
      //     .then((data) => {
      //       setStore({
      //         vehicles: data.results,
      //       });
      //     })
      //     .then(() => console.log(getStore().vehicles));
      // },
    },
  };
};

export default getState;
