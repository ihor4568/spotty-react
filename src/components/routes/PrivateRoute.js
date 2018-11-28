import React from "react";
import { Redirect, Route } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import MainLayout from "../shared/MainLayout";

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoaded, isLoggedIn } = rest;

  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoaded) {
          return null;
        }

        if (isLoaded && isLoggedIn) {
          return (
            <>
              <MainLayout>
                <Component {...props} />
              </MainLayout>
            </>
          );
        }

        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}

const mapStateToProps = state => ({
  isLoaded: state.auth.isLoaded,
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
