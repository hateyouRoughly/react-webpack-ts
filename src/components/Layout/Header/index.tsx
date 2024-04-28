import React, { useCallback, useMemo } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/reactRedux/counterSlice";

import "./style.css";

function BasicExample() {
  const profile = useSelector((state: any) => state.counter.profile);
  const dispatch = useDispatch();

  const profile_name = useMemo(
    () => profile?.first_name + " " + profile?.last_name,
    [profile]
  );

  const _logout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary main-header w-100" style={{ height: '100%' }}>
      <div style={{ backgroundColor: 'inherit' }} className="mx-4 w-100">
        <Navbar.Brand href="#home">
          WICTrax
        </Navbar.Brand>
        {profile?.first_name && (
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto justify-content-end" style={{ display: 'contents' }}>
              <NavDropdown title={""} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={_logout}>Logout</NavDropdown.Item>
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
