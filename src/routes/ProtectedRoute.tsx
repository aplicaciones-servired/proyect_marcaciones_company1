import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export function ProtectedRoute() {

  const [isAuth, setIsAuth] = useState(true);
  console.log(setIsAuth);

  return (
    isAuth ? <Outlet /> : <Navigate to="/" />
  )
}