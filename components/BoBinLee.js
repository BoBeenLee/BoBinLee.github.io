import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {MuiThemeProvider} from 'material-ui/styles/index';
import {cyan500, indigo900, teal500, teal300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link, Route, Switch} from 'react-router-dom';
import Intro from './Intro/Intro';
import Blog from './Blog/Blog';
import './BoBinLee.scss';
import AppBar from './AppBar/AppBar';

const propTypes = {};

const defaultProps = {};

const bobinleeTheme = getMuiTheme({
  palette: {
    textColor: teal500,
    primary1Color: teal500,
    primary2Color: teal300,
  },
});

class BoBinLee extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ bobinleeTheme }>
        <div>
          <header>
            <AppBar />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={ Intro }/>
              <Route path="/intro" component={ Intro }/>
              <Route path="/blog" component={ Blog }/>
            </Switch>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

BoBinLee.propTypes = propTypes;
BoBinLee.defaultProps = defaultProps;

export default BoBinLee;
