import React from 'react';

import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addNewFeatures, removeFeatures } from './actions/featureAction'

const App = (props) => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeatures={props.removeFeatures}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.addlFeatures} addNewFeatures={props.addNewFeatures}/>
        <Total car={props.car} additionalPrice={props.addlPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addlPrice: state.additionalPrice,
    car: state.car,
    addlFeatures: state.additionalFeatures
  }
};

export default connect(
  mapStateToProps, 
  {
    addNewFeatures,
    removeFeatures
  }
  )(App);
