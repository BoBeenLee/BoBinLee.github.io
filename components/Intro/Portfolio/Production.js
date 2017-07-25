import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Production.scss';
import SwHome from './Production/SwHome';
import Competition from './Production/Competition';
import SkhuAlarm from './Production/SkhuAlarm';
import House from './Production/House';
import Team42 from './Production/Team42';
import Taiger from './Production/Taiger';
import OnePage from './Production/OnePage';
import Intersection from './Production/Intersection';
import Flass from './Production/Flass';

const propTypes = {};

const defaultProps = {};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const styles = {
  chip: {
    marginLeft: 8,
    marginTop: -5
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
};

class Production extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    const productions = [
      SwHome, Competition, SkhuAlarm, House, Team42, Taiger,
      Intersection, OnePage, Flass ]
    .map((Component, index) => <Component key={`production${index}`} settings={settings} styles={styles} />);
    return (
      <div>
        <h2>Production</h2>
        {productions}
      </div>
    );
  }
}

Production.propTypes = propTypes;
Production.defaultProps = defaultProps;

export default Production;
