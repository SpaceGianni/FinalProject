const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL =
    "https://3001-spacegianni-finalprojec-zthi63k150b.ws-us75.gitpod.io";
  return {
    // variables globales
    store: {
      gallery: [],
      imagenes: [],
      user: null,
      errors: "",
      detail: null,
      pedidos: [],
      search: "",
      results: [],
      orders: [],
      misCotizaciones: [],
    },
    actions: {
      //Funcion para capturar el evento del buscador
      searcher: (e) => {
        setStore({ search: e.target.value });
        console.log(e.target.value);
      },
      //Funcion para traer todas las imagenes
      getPosts: () => {
        let url = BACKEND_URL + "/api/articulos";
        let options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options) // GET
          .then((response) => {
            // Respuesta del Servidor
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            //console.log(data);
            setStore({ gallery: data });
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      getUsers: () => {
        let url = BACKEND_URL + "/api/users";
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
            //console.log(data);
            // setStore se usa como useState, users toma el valor de data
            setStore({ users: data });
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      signIn: (nombre, apellido, email, password, navigate) => {
        let url = BACKEND_URL + "/api/users";
        let options_post = {
          method: "POST",
          body: JSON.stringify({ nombre, apellido, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options_post)
          .then((response) => {
            // Respuesta del Servidor
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            if (data.status === "error") {
              setStore({ errors: data });
              console.log(data);
            } else {
              // Datos Consultados
              console.log(data);
              // Si no tenemos errores ejecutar esto
              setStore({ errors: "" });
              // aÃ±adir funcion de registro exitoso
              navigate("/login");
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      logIn: (email, password, navigate) => {
        let url = BACKEND_URL + "/api/ingreso";
        let options = {
          method: "POST", // GET, POST, PUT, DELETE,
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options)
          .then((response) => {
            // Respuesta del Servidor
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            if (data.status === "error") {
              setStore({ errors: data, user: null });
              console.log(data);
            } else {
              // Datos Consultados
              console.log(data);
              // Sin errores
              setStore({ user: data.data, errors: "" });
              sessionStorage.setItem("user", JSON.stringify(data.data));
              navigate("/");
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      verifyUser: () => {
        if (sessionStorage.getItem("user")) {
          setStore({ user: JSON.parse(sessionStorage.getItem("user")) });
        }
      },
      logOut: () => {
        if (sessionStorage.getItem("user")) {
          setStore({ user: null });
          sessionStorage.removeItem("user");
        }
      },
      postImage: (formData, navigate) => {
        let url = BACKEND_URL + "/api/articulos";

        let options_post = {
          method: "POST", // GET, POST, PUT, DELETE,
          body: formData,
        };
        fetch(url, options_post) // GET
          .then((response) => {
            // Respuesta del Servidor
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            navigate("/");
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      getDetailById: (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ detail: data });
          });
      },
      agregarPedidos: (pedido) => {
        const { pedidos } = getStore();
        const pedidoActualizado = [pedido, ...pedidos];
        setStore({ pedido: pedidoActualizado });
      },
      orderProduct: (
        direccion,
        region,
        telefono,
        users_id,
        articulo_id,
        navigate
      ) => {
        let url = BACKEND_URL + "/api/cotizaciones";

        let options_post = {
          method: "POST",
          body: JSON.stringify({
            direccion,
            region,
            telefono,
            users_id,
            articulo_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options_post)
          .then((response) => {
            // Respuesta del Servidor
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            navigate("/cotizacion_exitosa");
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      getCotizaciones: () => {
        let url = BACKEND_URL + "/api/cotizaciones";
        let options_get = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options_get)
          .then((response) => {
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            setStore({ orders: data });
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      misCotizaciones: (id) => {
        let id_user = id;
        //console.log(id_user);
        let url = BACKEND_URL + "/api/users/" + id_user + "/cotizaciones";
        let options_get = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options_get)
          .then((response) => {
            console.log(response.status);
            return response.json();
          })
          .then((data) => {
            setStore({ misCotizaciones: data });
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
    },
  };
};

export default getState;
