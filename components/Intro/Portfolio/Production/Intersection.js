import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const imageUrls = [
  'tutorial.png',
  'main-1.png',
  'main-2.png',
  'main-3.png',
  'main-4.png'
];

const Intersection = (props) => {
  const { settings } = props;
  const images = imageUrls.map(url => <div><img width="300" style={{margin:"auto"}} src={`/img/intersection/${url}`} /></div> );

  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>중간지점앱</h4> }
        subtitle={ <div>
          <a href="https://github.com/Nexters/Intersection.Android"><img src="img/Github.svg" width="30" /></a>
          <a href="https://github.com/BoBinLee/map"><img src="img/Octocat.png" width="33" /></a>
          <a href="https://play.google.com/store/apps/details?id=com.nexters.intersection.intersectionapp"><img src="img/GooglePlay.png" width="80" style={{paddingTop:10}} /></a>
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

Intersection.propTypes = propTypes;
Intersection.defaultProps = defaultProps;

export default Intersection;
