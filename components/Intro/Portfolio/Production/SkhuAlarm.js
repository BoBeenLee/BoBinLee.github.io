import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const imageUrls = [
  'main.png',
  'facebook.png',
  'skhubrd.png',
  'qna.png',
  'menu.png',
  'calendar.png',
  'alarm.png'
];

const SkhuAlarm = (props) => {
  const { settings } = props;
  const images = imageUrls.map(url => <div><img width="300" style={{margin:"auto"}} src={`/img/skhualarm/${url}`} /></div> );

  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>성공회알람앱</h4> }
        subtitle={ <div>
          <a href="https://github.com/BoBinLee/SkhuApp"><img src="img/Github.svg" width="30" /></a>
          <a href="https://github.com/BoBinLee/Skhu.Server"><img src="img/Octocat.png" width="33" /></a>
          <a href="https://play.google.com/store/apps/details?id=com.skhu.bobinlee.skhuapp&hl=ko"><img src="img/GooglePlay.png" width="80" style={{paddingTop:10}} /></a>
        </div> }
        showExpandableButton={true}
      />
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
