import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="topbar">
    <div className="wrapper">
      <div className="topbar-wrapper">
        <NavLink
          to="/"
          exact
          title="Swagger UX"
        >
          <img height="30" width="30" alt="Swagger UX" />
          <span>King Power Click</span>
        </NavLink>
        <NavLink
          to="/"
          exact
        >
          Home
        </NavLink>
      </div>
    </div>
  </div>
);
