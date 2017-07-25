import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Chip, Divider} from 'material-ui';

const propTypes = {};

const defaultProps = {};

const SKILLS = ['Bootstrap', 'jQuery', 'velocity', 'lessJS'];

const Team42 = (props) => {
  const { settings, styles } = props;

  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b><a href="http://team42.net/" style={{textDecoration:'none', color:'inherit'}}>마피아42</a></b>
    </span>);

  return (
    <Card>
      <CardHeader title={ header } />
      <CardText>
        <div style={styles.wrapper}>{chips}</div>
      </CardText>
      <Divider />
    </Card>
  );
};

Team42.propTypes = propTypes;
Team42.defaultProps = defaultProps;

export default Team42;
