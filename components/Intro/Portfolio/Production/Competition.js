import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';

const propTypes = {};

const defaultProps = {};

const imageUrls = [
  'main.png',
  'board.png',
  'commentmng.png',
  'competition.png',
  'competitionmng.png',
  'mail.png',
  'scoremng.png',
  'system.png',
  'tagmng.png',
  'team.png',
  'teammng.png',
  'writeqna.png'
];

const Competition = (props) => {
  const { settings } = props;
  const images = imageUrls.map(url => <div><img width="800" style={{margin:"auto"}} src={`img/competition/${url}`} /></div> );

  return (
    <Card>
      <CardHeader
        title={ <h4 style={{marginTop: 5}}>경진대회 시스템</h4> }
        subtitle={ <a href="https://github.com/BoBinLee/SkhuCompetition.Server"><img src="img/Github.svg" width="30" /></a> }
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

Competition.propTypes = propTypes;
Competition.defaultProps = defaultProps;

export default Competition;
