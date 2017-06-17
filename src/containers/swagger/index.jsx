import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwaggerUI from '../../components/swagger';

const Swagger = (props) => {
  function getSpec() {
    const specs = props.specList;
    return specs != null && specs.size > 0 ? specs.find(spec => spec.name === props.params.specName) : {};
  }

  return (
    <SwaggerUI specParams={getSpec()} />
  );
};

Swagger.propTypes = {
  specList: PropTypes.arrayOf(PropTypes.object),
};

export default connect()(Swagger);
