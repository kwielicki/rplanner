import React from "react";
import { Route, Redirect } from "react-router-dom";
import ROUTES from "Root/src/routes.const";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, isVerifying } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isVerifying ? (
          <div />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.login,
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
