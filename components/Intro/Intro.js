import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Portfolio from './Portfolio/Portfolio';
import './Intro.scss';
import Contact from './Contact/Contact';


const propTypes = {};

const defaultProps = {};

class Intro extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  render() {

    return (
      <div>
        <div className="parallax">
          <div className="intro-1">
            Simple is Best
          </div>
        </div>
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;

export default Intro;
