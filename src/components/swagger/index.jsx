import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUi, { presets } from 'swagger-ui';

const SwaggerUI = ({ specParams }) => {
  SwaggerUi(specParams);
  return (
    <div id="swaggerContainer" />
  );
};

SwaggerUI.propTypes = {
  specParams: PropTypes.object,
};

SwaggerUI.defaultProps = {
  specParams: {
    dom_id: '#swaggerContainer',
    url: 'http://petstore.swagger.io/v2/swagger.json',
    presets: [presets.apis],
  },
};

export default SwaggerUI;
