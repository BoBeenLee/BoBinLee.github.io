import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const Flass = (props) => {
  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>플래스</h4> }
        subtitle={ <div>
          <a href="https://github.com/Nexters/flass"><img src="img/Github.svg" width="30" /></a>
        </div> }
      />
    </Card>
  );
};

Flass.propTypes = propTypes;
Flass.defaultProps = defaultProps;

export default Flass;
