import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <h3 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h3>
      <p className="lead">Sorry! the requested url can not be found</p>
    </React.Fragment>
  );
};

export default NotFound;
