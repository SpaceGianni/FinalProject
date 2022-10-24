import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // datos del los usuarios (data a modificar con los de la API)
  const database = [
    {
      useremail: "user1",
      password: "pass1"
    },
    {
      useremail: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid useremail",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //evita la acción de envío de formulario predeterminada que incluye la recarga de la página
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // encontrar el user en la data
    const userData = database.find((user) => user.useremail === uname.value);

    // comparacion de user en la base de datos
    if (userData) {
      if (userData.password !== pass.value) {
        // password invalida
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // useremail no encontrado
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // generador del error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Codigo del formulario
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Correo electronico </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Inicia Sesion</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;