const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// apiURL: "https://3000-4geeksacade-flaskresthe-w2bctampa5p.ws-us47.gitpod.io",
			apiURL: "https://3000-4geeksacade-flaskresthe-w2bctampa5p.ws-us54.gitpod.io",
			species: [],
			planets: [],
			planet: [],
			vehicles: [],
			store: []
		},
		actions: {
			////////////////////MyAPI///////////////////////////////////
			getPlanets: () => {
				fetch(getStore().apiURL + "/planets/")
					.then((res) => res.json())
					.then((data) => { 
						setStore({
							planets: data,
						});
					})
					.then(() => console.log(getStore().planets))
			},
			getPlanetId: (id) => {
				// fetch(`https://3000-4geeksacade-flaskresthe-w2bctampa5p.ws-us54.gitpod.io/planets/${id}`)
				fetch(`https://3000-4geeksacade-flaskresthe-w2bctampa5p.ws-us54.gitpod.io/planets/6`)
					.then((res) => res.json())
					.then((data) => { 
						setStore({
							planet: data,
						});
					})
					.then(() => console.log(getStore().planet))
			},
			getSpecies: () => {
				fetch(getStore().apiURL + "/species/")
					.then((res) => res.json())
					.then((data) => {
						setStore({
							species: data,
						});
					})
					.then(() => console.log(getStore().species));
			},			
			getVehicles: () => {
				fetch(getStore().apiURL + "/vehicles/")
					.then((res) => res.json())
					.then((data) => {
						setStore({
							vehicles: data,
						});
					})
					.then(() => console.log(getStore().vehicles));	
			}
			////////////////////END///////////////////////////////////
			// ////////////////////GOOD///////////////////////////////////
			// getSpecies: () => {
			// 	fetch("https://swapi.dev/api/species/")
			// 	// fetch(`https://swapi.dev/api/species/${id}`)
			// 		.then((res) => res.json())
			// 		.then((data) => {
			// 			setStore({
			// 				species: data.results,
			// 				// speciesid: data.indexOf(results),
			// 			});
			// 		})
			// 		.then(() => console.log(getStore().species));
			// },			
			// getPlanets: () => {
			// 	fetch("https://swapi.dev/api/planets")
			// 		.then((res) => res.json())
			// 		.then((data) => { 
			// 			// console.log(data)
			// 			setStore({
			// 				planets: data.results,
			// 				// store: data.next,
			// 			});
			// 		})
			// 		.then(() => console.log(getStore().planets))
			// 		// .then(() => console.log(getStore()));
			// },
			// getVehicles: () => {
			// 		fetch("https://swapi.dev/api/vehicles/")
			// 			.then((res) => res.json())
			// 			.then((data) => {
			// 					setStore({
			// 							vehicles: data.results,
			// 						});
			// 					})
			// 					.then(() => console.log(getStore().vehicles));	
			// 			}
			// ////////////////////END///////////////////////////////////


			////////////////CLASS VERSION//////////////////////////////////////
			// getPlanets: () => {
			// 	fetch("https://www.swapi.dev/api/planets")
			// 		.then(res => res.json())
			// 		.then(data => { console.log(data)
			// 			 setStore({planets:data.results})})
			// 		.catch(err => console.error(err))
			// },
			// getPlanet: (id) => {
			// 	fetch(`https://www.swapi.dev/api/planets/${id}`)
			// 		.then(res => res.json())
			// 		.then(data => { console.log(data)
			// 			 setStore({planet:data.result})})
			// 		.catch(err => console.error(err))
			// },
			///////////////////////////////////////////////////////////

			// getPlanetId: (id) => {
			// 	fetch(`https://swapi.dev/api/planets/${id}`)
			// 		.then((res) => res.json())
			// 		.then((data) => {
			// 			setStore({
			// 				planetId: data.result,
			// 			});
			// 		})
			// 		.then(() => console.log(getStore().planetId));
			// },
			// getPlanetId: (id) => {
			// 	fetch(`https://swapi.dev/api/planets/:id`)
			// 		.then((res) => res.json())
			// 		.then((data) => {
			// 			setStore({
			// 				planetId: data.result,
			// 			});
			// 		})
			// 		.then(() => console.log(getStore().planetId));
			// },
			////////////////////GOOD///////////////////////////////////
			// getVehicles: () => {
			// 	fetch("https://swapi.dev/api/vehicles/")
			// 		.then((res) => res.json())
			// 		.then((data) => {
			// 			setStore({
			// 				vehicles: data.results,
			// 			});
			// 		})
			// 		.then(() => console.log(getStore().vehicles));	
			// }
			////////////////TECH VERSION/////////////////////////////////////
			// getSpecies: () => {
			// 	fetch("https://www.swapi.tech/api/species/")
			// 		.then(res => res.json())
			// 		.then(data => {	console.log(data)
			// 			 setStore({species: data.results});})
			// 		.then(() => console.log(getStore().species))
			// 		.catch(err => console.error(err))
			// },
			// 	getSpecie: (id) => {
			// 		fetch(`https://www.swapi.tech/api/species/${id}`)
			// 			.then(res => res.json())
			// 			.then(data => {	console.log(data)
			// 				setStore({specie:data.result})})
			// 			.catch(err => console.error(err))
			// 	},
			
			// getPlanets: () => {
			// 	fetch("https://www.swapi.tech/api/planets/")
			// 		.then(res => res.json())
			// 		.then(data => { console.log(data)
			// 			 setStore({planets: data.results});})
			// 			 .then(() => console.log(getStore().planets))
			// 			 .catch(err => console.error(err))
			// },
			// 	getPlanet: (id) => {
			// 		fetch(`https://www.swapi.tech/api/planets/${id}`)
			// 			.then(res => res.json())
			// 			.then(data => { console.log(data)
			// 				setStore({planet:data.result})})
			// 			.catch(err => console.error(err))
			// 	},

			// getVehicles: () => {
			// 	fetch("https://www.swapi.tech/api/vehicles/")
			// 		.then(res => res.json())
			// 		.then(data => { console.log(data)
			// 			 setStore({vehicles: data.results});})
			// 			 .then(() => console.log(getStore().vehicles))
			// 			 .catch(err => console.error(err))
			// },
			// 	getVehicle: (id) => {
			// 		fetch(`https://www.swapi.tech/api/vehicles/${id}`)
			// 			.then(res => res.json())
			// 			.then(data => { console.log(data)
			// 				setStore({vehicle:data.result})})
			// 			.catch(err => console.error(err))
			// 	},
			////////////////END TECH VERSION/////////////////////////////////				
		}
	};
};

export default getState;
