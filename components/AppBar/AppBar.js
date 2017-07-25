import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, IconButton, IconMenu, MenuItem, Toolbar, ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import update from 'react-addons-update';
import fetch from 'axios';
import {Link} from 'react-router-dom';
import './AppBar.scss';

const propTypes = {};

const defaultProps = {};

class AppBar extends Component {
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

  componentDidMount() {
  }

  requestUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`).then(json => {
      const { avatar_url = '', html_url = '' } = json.data;
      // console.log(avatar_url, html_url);
      this.setState(update(this.state.user,
        { user: { $set: { avatar_url: avatar_url, github_url: html_url } } }));
    });
  };

  redirectPrevHome = () => {
    location.href = 'history/index.html';
  }

  render() {
    const { user } = this.state;

    return (
      <Toolbar className="menu-box">
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
          {/*<Link to="/activity" className="menu">*/}
          {/*<ToolbarTitle text="Act."/>*/}
          {/*</Link>*/}
          <Link to="/blog" className="menu">
            <ToolbarTitle text="Blog"/>
          </Link>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon className="menu-more" />
              </IconButton>
            }
          >
            <MenuItem primaryText="Old GitHome" onClick={this.redirectPrevHome} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default AppBar;
