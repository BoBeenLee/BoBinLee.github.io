import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};

const defaultProps = {};

const IMAGE_NAMES = [
  'tutorial.png',
  'main-1.png',
  'main-2.png',
  'main-3.png',
  'main-4.png',
];

const SKILLS = [
  'Android',
  'MaterialDesign',
  'GSON',
  'Spring Framework',
  'Hibernate',
  'PostgreSQL' ];

const Intersection = (props) => {
  const { settings, styles } = props;
  const images = IMAGE_NAMES.map((url, index) => (
    <div key={`intersection${index}`}>
      <img width="300" style={{ margin: 'auto' }}
           src={`img/intersection/${url}`}/>
    </div>));
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>중간지점앱</b>
      <a href="https://github.com/Nexters/Intersection.Android"
         style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a href="https://github.com/BoBinLee/map"
         style={{ marginLeft: 5 }}>
        <img src="img/Octocat.png" width="33"
             style={{ verticalAlign: 'middle' }}/></a>
      <a
        href="https://play.google.com/store/apps/details?id=com.nexters.intersection.intersectionapp"
        style={{ marginLeft: 5 }}>
        <img src="img/GooglePlay.png" width="80"
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

Intersection.propTypes = propTypes;
Intersection.defaultProps = defaultProps;

export default Intersection;
