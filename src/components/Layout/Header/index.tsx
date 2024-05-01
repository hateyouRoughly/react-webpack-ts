import React, { useCallback, useMemo } from "react";
import Navbar from "react-bootstrap/Navbar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/reactRedux/counterSlice";

import "./style.css";

function BasicExample() {
  const profile = useSelector((state: any) => state.counter.profile);
  const dispatch = useDispatch();

  const _logout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary main-header w-100" style={{ height: '100%' }}>
      <div style={{ backgroundColor: 'inherit' }} className="mx-4 w-100 row">
        <div className="col">
          <h5 className="m-0">WICTrax</h5>
        </div>
        <div className="col d-flex justify-content-end align-items-center column-gap-3">
          <div className="global-search row m-0">
            <div className="col-auto pe-0">
              <SearchIcon htmlColor="grey"/>
            </div>
            <div className="col ps-0">
              <input className="form-control shadow-none" type="text" placeholder="Search" />
            </div>
          </div>
          <div>
            <NotificationsIcon htmlColor="grey"/>
          </div>
          <button className="profile-icon">OP</button>
        </div>
      </div>
    </Navbar>
  );
}

export default BasicExample;
