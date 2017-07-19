import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Avatar, Toolbar, ToolbarGroup, ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import {cyan500, indigo900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link, Route, Switch} from 'react-router-dom';
import update from 'react-addons-update';
import fetch from 'axios';
import Intro from './Intro/Intro';
import Blog from './Blog/Blog';
import './BoBinLee.scss';

const propTypes = {};

const defaultProps = {};

const bobinleeTheme = getMuiTheme({
  palette: {
    textColor: indigo900,
  },
});

class BoBinLee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        avatar_url: '',
        github_url: '',
      },
    };
    this.requestUser('BoBinLee');
  }

  requestUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`).then(json => {
      const { avatar_url = '', html_url = '' } = json.data;
      // console.log(avatar_url, html_url);
      this.setState(update(this.state.user,
        { user: { $set: { avatar_url: avatar_url, github_url: html_url } } }));
    });
  };

  componentDidMount() {

  }

  render() {
    const { user } = this.state;
    console.log(this.state);

    return (
      <MuiThemeProvider muiTheme={ bobinleeTheme }>
        <div>
          <Toolbar className="menu-container">
            <ToolbarGroup>
              <a href={user.github_url}>
                <Avatar
                  src={user.avatar_url}
                  size={40}
                />
              </a>
              <ToolbarSeparator style={{ marginRight: '15px' }}/>
              <Link to="/intro" className="menu">
                <ToolbarTitle text="Intro"/>
              </Link>
              <Link to="/activity" className="menu">
                <ToolbarTitle text="Act."/>
              </Link>
              <Link to="/blog" className="menu">
                <ToolbarTitle text="Blog"/>
              </Link>
            </ToolbarGroup>
          </Toolbar>
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
