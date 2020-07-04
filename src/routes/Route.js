import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../components/_layout/default";
import AuthLayout from "../components/_layout/auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const isSigned = false;

  if (isPrivate && !isSigned) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && isSigned) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = isSigned ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
