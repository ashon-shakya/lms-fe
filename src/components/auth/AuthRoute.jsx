import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  return <h1>AUTH ROUTE</h1>;
  // TODO
  const location = useLocation();

  const { user } = useSelector((state) => state.userInfo);
  return user?._id ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{
        from: { location },
      }}
    />
  );
};
