import React from 'react';
import { connect } from 'react-redux'
import { addNewFeatures } from '../actions/addAction'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      onClick={() => props.addNewFeatures(props.feature)}
      className="button"
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    addlFeatures: state.additionalFeatures
  }
};

export default connect(
  mapStateToProps, 
  {
    addNewFeatures
  }
  )(AdditionalFeature);
