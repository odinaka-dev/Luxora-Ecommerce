import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
