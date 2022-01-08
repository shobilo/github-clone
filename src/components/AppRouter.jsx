import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const isUserLoading = useSelector((state) => state.user.isUserLoading)
  let routes = null

  if (isUserLoading){
    return <CircularProgress/>
  }

  isAuth 
    ? routes = privateRoutes 
    : routes = publicRoutes

  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
