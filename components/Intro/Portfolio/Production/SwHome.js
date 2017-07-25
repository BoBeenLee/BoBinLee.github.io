import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider  from 'react-slick';
import {Chip, Divider} from 'material-ui';

const propTypes = {};

const defaultProps = {};

const IMAGE_NAMES = [
  'main.png',
  'progress.png',
  'qnabrd.png',
  'pics.png',
  'write.png',
  'read.png',
  'mailbox.png',
];

const SKILLS = [ 'jQuery', 'PrototypeJs', 'JPageJs', 'JSP', 'MyBatis', 'RDB' ];

const SwHome = (props) => {
  const { settings, styles } = props;
  const images = IMAGE_NAMES.map((url, index) =>
    (<div key={`swhome${index}`} >
      <img height="500"
           style={{ margin: 'auto' }}
           src={`img/softhome/${url}`}/>
    </div>));
  const chips = SKILLS.map((skill, index) => (
    <Chip key={`skill${index}`} style={styles.chip}>
      {skill}
    </Chip>));
  const header = (
    <span>
      <b>학과 홈페이지</b>
      <a href="https://github.com/BoBinLee/swhome"
         style={{ marginLeft: 10 }}>
        <img src="img/Github.svg" width="30"
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

SwHome.propTypes = propTypes;
SwHome.defaultProps = defaultProps;

export default SwHome;
