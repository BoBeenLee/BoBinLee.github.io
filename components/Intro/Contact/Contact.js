import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import GitHubIcon from '../../../public/img/Github.svg';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {CommunicationEmail} from 'material-ui/svg-icons/index';
import {CommunicationForum} from 'material-ui/svg-icons/index';
import Paper from 'material-ui/Paper';
import './Contact.scss';

const emailIcon = <CommunicationEmail />;
const githubIcon = <img height={24} style={{marginBottom: 2}} src={GitHubIcon} alt="github" /> ; // <IconButton iconClassName="muidocs-icon-custom-github" />;
const forumIcon = <CommunicationForum />;

const propTypes = {};

const defaultProps = {};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  select = (index) => this.setState({selectedIndex: index});

  componentDidMount() {}

  render() {
    return (
      <div>
        <FontIcon className="muidocs-icon-action-home" />
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Email"
              icon={emailIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Github"
              icon={githubIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Tistory"
              icon={forumIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
