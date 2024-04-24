import { contextReducer } from "@/contextApi";
import React, { useCallback, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./style.css";

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
    <Navbar expand="lg" className="bg-body-tertiary main-header w-100" style={{ height: '100%' }}>
      <div style={{ backgroundColor: 'inherit' }} className="mx-4 w-100">
        <Navbar.Brand href="#home">
          WICTrax
        </Navbar.Brand>
        {state?.profile?.first_name && (
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto justify-content-end" style={{ display: 'contents' }}>
              <NavDropdown title={""} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
							<Navbar.Text>
            	  Signed in as: <a href="#login">{profile_name}</a>
            	</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        )}
      </div>
    </Navbar>
  );
}

export default BasicExample;
