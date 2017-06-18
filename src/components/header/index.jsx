import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const logo = require('../../assets/images/logo-king-power_3x.png');

export default () => (
  <div className="topbar">
    <div className="wrapper">
      <div className="topbar-wrapper">
        <NavLink
          to="/"
          exact
          title="Swagger UX"
        >
          <img
            height="50"
            src={logo}
            alt="King Power Click - service API"
          />
        </NavLink>
        <div className="try-out">
          <NavLink
            className="btn try-out__btn"
            to="/"
            exact
          >
            Home
        </NavLink>
        </div>
      </div>
    </div>
  </div>
);
