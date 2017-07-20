import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardText, List, ListItem,
  RaisedButton,
} from 'material-ui';
import _ from 'lodash';
import moment from 'moment';
import './Blog.scss';

const propTypes = {
  url: PropTypes.string,
};

const defaultProps = {
  url: 'http://cultist-tp.tistory.com/rss',
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.requestTistoryRSS();
  }

  requestTistoryRSS = () => {
    const { url } = this.props;
    feednami.load(url, (res) => {
      const articles = _.map(res.feed.entries, article => {
        return {
          guid : article.guid,
          title : article.title,
          link : article.link,
          date : article.date,
          description: article.description,
        };
      });
      this.setState({articles});
    });
  };

  render() {
    const { url } = this.props;
    const articles = this.state.articles.map(article => {
      const title = (<a href={article.link} className="blog-title">{article.title}</a>);
      const date = (<div className="blog-date">{moment(article.date).format('YYYY-MM-DD HH:mm:ss')}</div>);
      const description = (<div dangerouslySetInnerHTML={{__html: article.description}}></div>);
      return (
        <Card key={article.guid} className="blog-card">
          <CardHeader
            title={title}
            subtitle={date}
            showExpandableButton={true}
          />
          <CardText className="blog-card-content" expandable={true}>
            {description}
          </CardText>
        </Card>)
    });
    return (
      <div className="blog">
        <List>
          {articles}
          <RaisedButton href={url} label="More" primary className="blog-more-button" />
        </List>
      </div>
    );
  }
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;
