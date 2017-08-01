import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};

const defaultProps = {};

const IMAGE_NAMES = [
  'main.png',
  'board.png',
  'commentmng.png',
  'competition.png',
  'competitionmng.png',
  'mail.png',
  'scoremng.png',
  'system.png',
  'tagmng.png',
  'team.png',
  'teammng.png',
  'writeqna.png'
];

const SKILLS = ['Bootstrap', 'AngularJS', 'LessJS', 'jQuery', 'Spring Framework', 'Tiles', 'MyBatis', 'MariaDB'];

const Competition = (props) => {
  const { settings, styles } = props;
  const images = IMAGE_NAMES.map((url, index) => (
    <div key={`competition${index}`}>
      <img height="500"
           style={{ margin: '10px auto' }}
           src={`img/competition/${url}`}/>
    </div>));
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>경진대회 시스템</b>
      <a href="https://github.com/BoBinLee/SkhuCompetition.Server"
         style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
             style={{ verticalAlign: 'middle' }}/>
      </a>
    </span>);
  return (
    <Card>
      <CardHeader
        title={ header }
        showExpandableButton={true}
      />
      <CardText>
        <div style={styles.wrapper}>{chips}</div>
      </CardText>
      <Divider />
      <CardText expandable={true}>
        <Slider {...settings}>
          {images}
        </Slider>
      </CardText>
    </Card>
  );
};

Competition.propTypes = propTypes;
Competition.defaultProps = defaultProps;

export default Competition;
