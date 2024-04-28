import React, { useCallback, useMemo } from "react";
import "./style.css";
import { contextReducer } from "@/contextApi";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavbarSize, SidebarList } from "../interface";
import RecurringNav from "./RecurringSidebar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { logout } from "@/reactRedux/counterSlice";
import { useDispatch } from "react-redux";

const sidebarList: SidebarList = [
  {
    icon: <></>,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <></>,
    title: "Listing",
    path: "/listing",
  },
];

const Sidebar = ({
  setNavbarSize,
  navbarSize,
}: {
  setNavbarSize: any;
  navbarSize: NavbarSize;
}) => {
  const dispatch = useDispatch();

  const _logout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const sidebarExtend = useMemo(() => navbarSize === "max", [navbarSize]);

  const toggleNavbar = useCallback(() => {
    setNavbarSize((pre: NavbarSize) => (pre === "max" ? "min" : "max"));
  }, []);

  return (
    <div className="container-fluid main-sidebar">
      <div className="row d-flex">
        <div
          className="text-white scroll-overflow"
          style={{
            height: "100vh",
            paddingBottom: "60px",
            paddingTop: "100px",
          }}
        >
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mb-md-0 me-md-auto text-white text-decoration-none pb-2 header-logo"
          >
            <img
              alt=""
              src="/images/logo.png"
              style={{
                height: "60%",
                width: "100%",
                objectFit: "contain",
                padding: "0px 10px",
              }}
              className="d-inline-block align-top"
            />{" "}
          </a>
          <RecurringNav sidebarExtend={sidebarExtend} />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item" onClick={_logout}>
              <a href="#" className="nav-link">
                <div className="row m-0 align-items-center">
                  <div className="col-auto p-0">
                    <ExitToAppIcon htmlColor={"white"} />{" "}
                  </div>
                  {sidebarExtend && (
                    <div className="col p-0 ps-4">&nbsp;{"Logout"}</div>
                  )}
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`d-flex align-items-end p-0 sidebar-toggle`}
          style={{ height: "50px", position: "absolute", bottom: 0 }}
        >
          <div
            className={`d-flex align-items-center col p-4 justify-content-${
              sidebarExtend ? "end" : "center"
            }`}
          >
            {navbarSize === "max" ? (
              <ArrowBackIosIcon
                htmlColor={"white"}
                onClick={toggleNavbar}
                role="button"
                style={{ fontSize: 14 }}
              />
            ) : (
              <ArrowForwardIosIcon
                htmlColor={"white"}
                onClick={toggleNavbar}
                role="button"
                style={{ fontSize: 14 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
