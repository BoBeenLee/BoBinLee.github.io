import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import content from '../Introduction.md';
import 'github-markdown-css';

const propTypes = {};

const defaultProps = {};

const Introduction = () => {
  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(content)}}>
    </div>
  );
};

Introduction.propTypes = propTypes;
Introduction.defaultProps = defaultProps;

export default Introduction;
