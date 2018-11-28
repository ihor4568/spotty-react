import React from "react";
import { Route } from "react-router-dom";
import PublicLayout from "../shared/PublicLayout";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <PublicLayout>
            <Component {...props} />
          </PublicLayout>
        </>
      )}
    />
  );
}

export default PrivateRoute;
