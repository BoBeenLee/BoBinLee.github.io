import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const propTypes = {};

const defaultProps = {};


const Team42 = (props) => {
  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}><a href="http://team42.net/">마피아42</a></h4> }
      />
    </Card>
  );
};

Team42.propTypes = propTypes;
Team42.defaultProps = defaultProps;

export default Team42;
