import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import imagenFinal from "../../img/Logo_proyecto_final.png";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function NewNavbar() {
  const { store, actions } = useContext(Context);
  console.log(`${store.user?.usuario?.tipo} linea 15`);
  return (
    <Navbar className="pBgColor" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img id="navbarImagen" src={imagenFinal} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ms-auto me-auto">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="" className="filterbutton">
              Buscar
            </Button>
          </Form>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!!store.user ? (
              <>
                <NavDropdown
                  className="dropdownWhiteLink"
                  title={`Hola ${store.user?.usuario?.nombre}`}
                  id="navbarScrollingDropdown"
                >
                  {store.user?.usuario?.tipo === "cliente" ? (
                    <>
                      <NavDropdown.Item>
                        <Link className="dropdownColor" to="/admin/Orders">
                          Mis Cotizaciones
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item disabled>
                        Mis productos
                      </NavDropdown.Item>
                      <NavDropdown.Item disabled>Historial</NavDropdown.Item>
                      <NavDropdown.Item disabled>Perfil</NavDropdown.Item>
                    </>
                  ) : null}
                  {store.user?.usuario?.tipo === "admin" ? (
                    <>
                      <NavDropdown.Item>
                        <Link
                          className="dropdownColor"
                          to="/admin/FormProducto"
                        >
                          Subir Producto
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item disabled>
                        Mis productos
                      </NavDropdown.Item>
                      <NavDropdown.Item disabled>Historial</NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="dropdownColor" to="/admin/orders">
                          Mis Pedidos
                        </Link>
                      </NavDropdown.Item>
                    </>
                  ) : null}

                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={actions.logOut}
                    href="/"
                    id="firstDropdownOption"
                  >
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Link to="/login">
                <Nav.Link className="nav-link text-white" disabled>
                  Iniciar sesión
                </Nav.Link>
              </Link>
            )}
            {store.user?.usuario?.tipo === "cliente" ? (
              <Link to="/admin">
                <Nav.Link className="nav-link text-white" disabled>
                  Mis Cotizaciones
                </Nav.Link>
              </Link>
            ) : null}
            {store.user?.usuario?.tipo === "admin" ? (
              <Link to="/admin/FormProducto">
                <Nav.Link className="nav-link text-white" disabled>
                  Subir producto <i class="fa-solid fa-upload"></i>
                </Nav.Link>
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;
