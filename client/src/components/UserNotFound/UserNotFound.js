import React from "react";
import { Link } from "react-router-dom";
import "./UserNotFound.scss";

export default function UserNotFound() {
  return (
    <div className="user-not-found">
      <p>Sorry, this page isn't available.</p>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <Link to="/"> Go back.</Link>
      </p>
    </div>
  );
}
