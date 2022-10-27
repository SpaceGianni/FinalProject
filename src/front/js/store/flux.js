const getState = ({ getActions, setStore }) => {
  return {
    // variables globales
    store: {
      gallery: [],
      user: null,
      errors: "",
    },
    actions: {
      //funciones van en action
      // Use getActions to call a function within a fuction
    
      //funcion para hacer el fetch por el metodo GET
      getPosts: () => {
        let url = "https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us73.gitpod.io/api/galleries";
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
            setStore({ gallery: data });
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      getUsers: () => {
        let url ="https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us73.gitpod.io/api/users";
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
            setStore({ users: data });
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      signIn: ( nombre, apellido, email, password, navigate ) => {
        let url = "https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us73.gitpod.io/api/users";
        let options_post = {
          method: "POST", // GET, POST, PUT, DELETE,
          body: JSON.stringify({ nombre, apellido, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options_post) // GET
          .then((response) => {
            // Respuesta del Servidor
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            if (data.status === "error") {
              setStore({ errors: data });             
			  console.log(data)
            } else {
              // Datos Consultados
              console.log(data);
              // Si no tenemos errores ejecutar esto 
              setStore({ errors: "" }); 
              // añadir funcion de registro exitoso           
              navigate('/login')
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      logIn: (email, password, navigate) => {
        let url = "https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us73.gitpod.io/api/ingreso";
        let options_get = {
          method: "POST", // GET, POST, PUT, DELETE,
          body: JSON.stringify({ email, password }),
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
            if (data.status === "error") {
              setStore({ errors: data, user: null});
			  console.log(data)
            } else {
              // Datos Consultados
              console.log(data);
              // Sin errores
              setStore({ user: data.data, errors:'' });
              sessionStorage.setItem('user', JSON.stringify(data.data))
              navigate('/')
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      verifyUser : () => {
        if(sessionStorage.getItem('user'))
        {
          setStore({user: JSON.parse(sessionStorage.getItem('user'))})
        }
      },
      logOut: ()=>{
        if(sessionStorage.getItem('user'))
        {
          setStore({user: null})
          sessionStorage.removeItem('user')
        }
      },
    },
  };
};

export default getState;
