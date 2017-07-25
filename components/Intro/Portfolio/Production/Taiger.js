import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};
const defaultProps = {};

const SKILLS = ['Android', 'Retrofit2', 'Picasso', 'Kakao Api', 'Spring Boot', 'QueryDSL', 'Guava'];

const Taiger = (props) => {
  const { settings, styles } = props;

  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>택시합승앱</b>
      <a href="https://github.com/Nexters/TaigerApp"
         style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a href="https://github.com/Nexters/Taiger"
         style={{ marginLeft: 5 }}>
        <img src="img/Octocat.png" width="33"
             style={{ verticalAlign: 'middle' }}/>
      </a>
    </span>);
  return (
    <Card>
      <CardHeader
        title={ header }
      />
      <CardText>
        <div style={styles.wrapper}>{chips}</div>
      </CardText>
      <Divider />
    </Card>
  );
};

Taiger.propTypes = propTypes;
Taiger.defaultProps = defaultProps;

export default Taiger;
