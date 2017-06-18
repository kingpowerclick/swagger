import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';

const Root = ({ children }) => (
  <div className="swagger-ui">
    <section className="swagger-container">
      <Header />

      <div>
        {children}
      </div>
    </section>
  </div>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
