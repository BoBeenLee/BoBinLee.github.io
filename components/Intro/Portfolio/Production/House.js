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
  'kakao.png',
  'facebook.png',
  'login.png',
  'signup.png',
  'list.png',
  'write1.png',
  'write2.png',
  'write3.png',
  'read1.png',
  'read2.png',
  'mypage.png',
  'setting.png',
];

const SKILLS = [
  'Android',
  'SNS API(Kakao, Facebook)',
  'Spring Framework',
  'MyBatis',
  'PostgreSQL' ];

const House = (props) => {
  const { settings, styles } = props;
  const images = IMAGE_NAMES.map((url, index) => (
    <div key={`house${index}`}>
      <img width="300" style={{ margin: 'auto' }} src={`img/house/${url}`}/>
    </div>));
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>하우스앱</b>
      <a href="https://github.com/BoBinLee/House.Android"
         style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a href="https://github.com/BoBinLee/House.Server"
         style={{ marginLeft: 5 }}>
        <img src="img/Octocat.png" width="33"
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

House.propTypes = propTypes;
House.defaultProps = defaultProps;

export default House;
