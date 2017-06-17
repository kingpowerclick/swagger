import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwaggerUi, { presets } from 'swagger-ui';
import SwaggerComponent from '../../components/swagger';

class Swagger extends React.Component {

  static propTypes = {
    specList: PropTypes.arrayOf(PropTypes.shape({ dom_id: {}, url: {}, spec: {}, presets: [] })).isRequired,
  };

  componentDidMount() {
    SwaggerUi(this.getSpec());
  }

  getSpec() {
    const specs = this.props.specList;
    const specItem = specs != null && specs.length > 0 ? specs.find(spec =>
      spec.name === this.props.match.params.specName) : {};
    specItem.dom_id = '#swaggerContainer';
    specItem.presets = [presets.apis];
    return specItem;
  }

  render() {
    return (
      <SwaggerComponent />
    );
  }
}

export default connect(
  ({ specList }) => ({ specList }),
)(Swagger);
