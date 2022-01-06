import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <h5>
      404 ERROR!
      <Link to="/">Go back.</Link>
    </h5>
  );
}

export default NotFound;
