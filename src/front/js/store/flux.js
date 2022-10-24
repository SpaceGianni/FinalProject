const getState = ({ getActions, setStore }) => {

	return {
		// variables globales
		store: {

			gallery: [],
			
			
		},
		actions: {
			//funciones van en action
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//funcion para hacer el fetch por el metodo GET
			getDataTest : () => {
				let url = "https://3001-greatzerlle-finalproyec-dod50lpsm2a.ws-us72.gitpod.io/api/galleries";
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
					// setStore se usa como useState, gallery toma el valor de data
					setStore({gallery:data});
				  })
				  .catch((error) => {
					console.error(error.message);
				  });
			  },

		}
	};
};

export default getState;
