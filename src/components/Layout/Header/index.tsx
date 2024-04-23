import { contextReducer } from "@/contextApi";
import React, { useCallback, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  const { state, dispatch } = contextReducer();

  const profile_name = useMemo(
    () => state?.profile?.first_name + " " + state?.profile?.last_name,
    [state?.profile]
  );

  const logout = useCallback(() => {
    dispatch({
      type: "LOGOUT",
    });
  }, [dispatch]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/images/logo.png"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {state?.profile?.first_name && (
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto justify-content-end" style={{ display: 'contents' }}>
							<Navbar.Text>
            	  Signed in as: <a href="#login">{profile_name}</a>
            	</Navbar.Text>
              <NavDropdown title={""} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default BasicExample;
