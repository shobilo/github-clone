import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  let roots = null

  isAuth 
    ? roots = privateRoutes 
    : roots = publicRoutes

  return (
    <Routes>
      {roots.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
