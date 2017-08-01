import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};

const defaultProps = {};

const imageUrls = [
  'main.png',
  'facebook.png',
  'skhubrd.png',
  'qna.png',
  'menu.png',
  'calendar.png',
  'alarm.png',
];

const SKILLS = [
  'Android',
  'Facebook Graph API',
  'Picasso',
  'Gson',
  'Spring Framework',
  'MyBatis',
  'Jsoup',
  'Quartz',
  'MariaDB' ];

const SkhuAlarm = (props) => {
  const { settings, styles } = props;
  const images = imageUrls.map((url, index) => (
    <div key={`skhualarm${index}`}>
      <img width="300"
           style={{ margin: '10px auto' }}
           src={`img/skhualarm/${url}`}/>
    </div>));
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>성공회알람앱</b>
      <a href="https://github.com/BoBinLee/SkhuApp" style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a href="https://github.com/BoBinLee/Skhu.Server"
         style={{ marginLeft: 5 }}>
        <img src="img/Octocat.png" width="33"
             style={{ verticalAlign: 'middle' }}/>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.skhu.bobinlee.skhuapp&hl=ko"
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

SkhuAlarm.propTypes = propTypes;
SkhuAlarm.defaultProps = defaultProps;

export default SkhuAlarm;
