const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			gallery: [],
			currentPage: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getDataTest: () => {
				let url = "http://127.0.0.1:3001/api/galleries";
				let options_get = {
					method: "GET", // GET, POST, PUT, DELETE,
					//body: "", // POST, PUT
					headers: {
						"Content-Type": "application/json",
					},
				};
				fetch(url, options_get) // GET
					.then((response) => {
						// Respuesta del Servidor
						console.log(response.status);
						return response.json();
					})
					.then((data) => {
						// Datos Consultados
						console.log(data);
						setStore({ gallery: data });
					})
					.catch((error) => {
						console.error(error.message);
					});
			},

		}
	};
};

export default getState;
