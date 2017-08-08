import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import BoBinLee from './BoBinLee';
import blogStore from '../stores/blogsStore';

const propTypes = {};
const defaultProps = {};

const stores = {
  blogStore,
};

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <BoBinLee />
        </BrowserRouter>
      </Provider>
    );
  }
}

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;

export default Root;
