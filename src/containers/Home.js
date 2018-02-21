import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../actions';

import ExampleComponent from '../components/ExampleComponent';

let Home = ({exampleReducer, actions}) => (
  <div className="Home">
    <header className="Home-header">
      <h1 className="Home-title">Example React Redux Electron Boilerplate</h1>
    </header>
    <ExampleComponent 
      exampleBool={exampleReducer.exampleBool}
      setExampleAction={actions.setExampleAction}
      text='Hello'/>
  </div>
)


function mapStateToProps(state) {
  return {
    exampleReducer: state.default.exampleReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
