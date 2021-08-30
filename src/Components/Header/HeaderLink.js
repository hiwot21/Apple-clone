import React, { Component } from "react";
import { NavLink } from "react-router-dom";
function Headerlink(props) {
  return (
    <li className="nav-item">
      <NavLink
        to={props.linkUrl}
        activeClassName="active"
        className="nav-link js-scroll-trigger"
      >
        {props.linkName}
      </NavLink>
    </li>
  );
}

export default Headerlink;
