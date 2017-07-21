import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import content from '../Career.md';
import 'github-markdown-css';

const propTypes = {};

const defaultProps = {};


const Career = () => {
  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(content)}}>
    </div>
  );
};

Career.propTypes = propTypes;
Career.defaultProps = defaultProps;

export default Career;
