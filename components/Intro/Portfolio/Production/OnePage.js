import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const OnePage = (props) => {
  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>원페이지</h4> }
        subtitle={ <div>
          <a href="https://github.com/OnePageAndroid/OnePage"><img src="img/Github.svg" width="30" /></a>
          <a href="https://github.com/OnePageAndroid/OnePageServer"><img src="img/Octocat.png" width="33" /></a>
          <a href="https://play.google.com/store/apps/details?id=kr.nexters.onepage&hl=ko"><img src="img/GooglePlay.png" width="80" style={{paddingTop:10}} /></a>
        </div> }
      />
    </Card>
  );
};

OnePage.propTypes = propTypes;
OnePage.defaultProps = defaultProps;

export default OnePage;
