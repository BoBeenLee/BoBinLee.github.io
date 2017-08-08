import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  List,
  RaisedButton,
} from 'material-ui';
import {observer, inject} from "mobx-react";
import {observable, autorun, action} from "mobx";
import './Blog.scss';
import BlogCard from './BlogCard';

const propTypes = {
  rssUrl: PropTypes.string,
  blogUrl: PropTypes.string
};

const defaultProps = {
  rssUrl: 'http://cultist-tp.tistory.com/rss',
  blogUrl : 'http://cultist-tp.tistory.com',
};

@inject('blogStore')
@observer
class Blog extends Component {
  constructor(props) {
    super(props);
  }

  handleToggleDetail = (guid) => {
    this.props.blogStore.toggleDetail(guid);
  }

  componentDidMount() {
    const { rssUrl } = this.props;
    this.props.blogStore.requestTistoryRSS(rssUrl);
  }

  render() {
    const { blogUrl } = this.props;
    const articles = this.props.blogStore.articles.map(article =>
      <BlogCard key={article.guid} article={article} toggleDetail={this.handleToggleDetail} />);
    return (
      <div className="blog">
        <List>
          {articles}
          <RaisedButton href={blogUrl} label="More" primary className="blog-more-button" />
        </List>
      </div>
    );
  }
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;
