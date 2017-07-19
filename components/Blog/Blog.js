import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tistory from 'tistory-api';

const propTypes = {};

const defaultProps = {};

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  render() {
    const params = {
      access_token: 'abc...XYZ', // put tistory's access token.
      output: 'json'
    };

    const tistory = new Tistory(params);

    return (
      <div>Blog</div>
    );
  }
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;
