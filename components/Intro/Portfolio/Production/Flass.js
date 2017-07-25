import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};
const defaultProps = {};

const SKILLS = [
  'ReactJS',
  'React-Router',
  'Mocha',
  'Redux',
  'Material UI',
  'Webpack',
  'Sass',
  'Rails' ];

const Flass = (props) => {
  const { settings, styles } = props;
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>플래스</b>
      <a href="https://github.com/Nexters/flass"
         style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
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

Flass.propTypes = propTypes;
Flass.defaultProps = defaultProps;

export default Flass;
