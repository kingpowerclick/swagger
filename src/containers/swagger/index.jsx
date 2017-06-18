import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwaggerUi, { presets } from 'swagger-ui';

class Swagger extends React.Component {

  static propTypes = {
    specList: PropTypes.arrayOf(PropTypes.shape(
      {
        dom_id: PropTypes.string,
        url: PropTypes.string,
        spec: PropTypes.string,
        presets: [],
      }),
    ).isRequired,
    match: PropTypes.shape({ params: { specName: PropTypes.string } }).isRequired,
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
      <div id="swaggerContainer" />
    );
  }
}

const mapStateToProps = state => ({
  specList: state.spec.specList,
});

export default connect(
  mapStateToProps,
)(Swagger);
