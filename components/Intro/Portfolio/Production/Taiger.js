import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const Taiger = (props) => {
  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>택시합승앱</h4> }
        subtitle={ <div>
          <a href="https://github.com/Nexters/TaigerApp"><img src="img/Github.svg" width="30" /></a>
          <a href="https://github.com/Nexters/Taiger"><img src="img/Octocat.png" width="33" /></a>
        </div> }
      />
    </Card>
  );
};

Taiger.propTypes = propTypes;
Taiger.defaultProps = defaultProps;

export default Taiger;
