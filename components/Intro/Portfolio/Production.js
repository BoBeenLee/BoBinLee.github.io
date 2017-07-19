import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const propTypes = {};

const defaultProps = {};

const content = `
Production
--------
* 학과 홈페이지
* 경진대회 시스템
* [성공회알람앱](https://play.google.com/store/apps/details?id=com.skhu.bobinlee.skhuapp&hl=ko)
  * 로고 이미지

* 하우스앱
* 중간지점앱
* 원페이지

`;

const Production = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(content)}}>
    </div>
  );
};

Production.propTypes = propTypes;
Production.defaultProps = defaultProps;

export default Production;
