import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ExampleStyles from '../styles/ExampleStyles';


class ExampleComponent extends Component {

  constructor(props) {
    super(props);
  }

  fireAction() {
    this.props.setExampleAction();
  }

  render() {
    return(
      <div>
        <p>Example Component - Example Prop Text: {this.props.text}</p>
        <button onClick={this.fireAction.bind(this)} type='button'>
          Toggle Bool Value Action
        </button>
        <p style={ExampleStyles.boldFont}>Bool Value = {this.props.exampleBool.toString()}</p>
      </div>
    );
  }
}

ExampleComponent.propTypes = {
  text: PropTypes.string.isRequired,
  setExampleAction: PropTypes.func.isRequired,
  exampleBool: PropTypes.bool.isRequired
}
export default ExampleComponent;
