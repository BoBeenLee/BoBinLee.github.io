import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const imageUrls = [
  'main.png',
  'progress.png',
  'qnabrd.png',
  'pics.png',
  'write.png',
  'read.png',
  'mailbox.png'
];

const SwHome = (props) => {
  const { settings } = props;
  const images = imageUrls.map(url => <div><img width="800" style={{margin:"auto"}} src={`/img/softhome/${url}`} /></div> );

  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>학과 홈페이지</h4> }
        subtitle={ <a href="https://github.com/BoBinLee/swhome"><img src="img/Github.svg" width="30" /></a> }
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

SwHome.propTypes = propTypes;
SwHome.defaultProps = defaultProps;

export default SwHome;
