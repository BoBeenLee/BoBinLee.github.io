import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import content from '../Production.md';


const propTypes = {};

const defaultProps = {};

const Production = () => {
  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(content)}}>
    </div>
  );
};

Production.propTypes = propTypes;
Production.defaultProps = defaultProps;

export default Production;
