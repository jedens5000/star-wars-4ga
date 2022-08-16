const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // apiURL: process.env.BACKEND_URL_DEVAPI,
      apiURL: process.env.BACKEND_URL_PY4EAPI,
      species: [],
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      ////////////////////API Fetch///////////////////////////////////
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
