import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};

const defaultProps = {};

const SKILLS = [
  'Android',
  'Retrofit2',
  'Butterknife',
  'Spring Boot',
  'Java8',
  'QueryDSL',
  'SwaggerUI',
  'Mockito',
  'MySQL' ];

const OnePage = (props) => {
  const { settings, styles } = props;
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>원페이지</b>
      <a href="https://github.com/OnePageAndroid/OnePage"
         style={{ marginLeft: 5 }}>
        <img src="img/Github.svg" width="30"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a href="https://github.com/OnePageAndroid/OnePageServer"
         style={{ marginLeft: 5 }}>
        <img src="img/Octocat.png" width="33"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=kr.nexters.onepage&hl=ko"
        style={{ marginLeft: 5 }}>
        <img src="img/GooglePlay.png" width="80"
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

OnePage.propTypes = propTypes;
OnePage.defaultProps = defaultProps;

export default OnePage;
