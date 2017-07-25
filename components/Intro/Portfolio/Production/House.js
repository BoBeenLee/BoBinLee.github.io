import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const imageUrls = [
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
  'setting.png'
];

const House = (props) => {
  const { settings } = props;
  const images = imageUrls.map(url => <div><img src={`img/house/${url}`} /></div> );

  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>하우스앱</h4> }
        subtitle={ <div>
          <a href="https://github.com/BoBinLee/House.Android"><img src="img/Github.svg" width="30" /></a>
          <a href="https://github.com/BoBinLee/House.Server"><img src="img/Octocat.png" width="33" /></a>
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

House.propTypes = propTypes;
House.defaultProps = defaultProps;

export default House;
