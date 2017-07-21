import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardText} from 'material-ui';

const propTypes = {};

const defaultProps = {};

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Test',
      height: '10vh',
    };
  }

  componentDidMount() {
    var self = this;
    setInterval(function() {
      self.setState({
        text: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ',
        height: '15vh',
      });
    }, 2000);
  }

  render() {
    var cardStyle = {
      display: 'block',
      width: '80vw',
      transitionDuration: '0.3s',
      height: this.state.height,
    };
    return (
      <div>
        <Card style={cardStyle}>
          <CardText>
            {this.state.text}
          </CardText>
        </Card>
      </div>
    );
  }
}

Sample.propTypes = propTypes;
Sample.defaultProps = defaultProps;

export default Sample;
