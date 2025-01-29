import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo,
}) => {
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
