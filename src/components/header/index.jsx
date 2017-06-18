import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-king-power_3x.png';

export default () => (
  <div className="topbar">
    <div className="wrapper">
      <div className="topbar-wrapper">
        <NavLink
          to="/"
          exact
          title="Swagger UX"
        >
          <img height="50" src={Logo} alt="King Power Click - service API" />
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
