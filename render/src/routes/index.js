import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import Report from "./report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/report"/>
  },
  {
    path: "/report",
    Component: Report,
  },
]);

export default router

