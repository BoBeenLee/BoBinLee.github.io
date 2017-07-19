import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BoBinLee from './BoBinLee';
import Intro from './Intro/Intro';
import Blog from './Blog/Blog';

const propTypes = {};

const defaultProps = {};

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <BoBinLee />
      </BrowserRouter>
    );
  }
}

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;

export default Root;
