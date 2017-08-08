import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardText
} from 'material-ui';
import _ from 'lodash';
import moment from 'moment';
import './BlogCard.scss';

const propTypes = {
  article : PropTypes.object.isRequired,
  toggleDetail: PropTypes.func.isRequired,
};

const defaultProps = {};

class BlogCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { article, toggleDetail } = this.props;
    const title = (<a href={article.link} className="blog-title">{article.title}</a>);
    const date = (<div className="blog-date">{moment(article.date).format('YYYY-MM-DD HH:mm:ss')}</div>);
    const description = (<div dangerouslySetInnerHTML={{__html: article.description}}></div>);
    return (
      <div>
        <Card className="blog-card" onExpandChange={_.partial(toggleDetail, article.guid)}>
          <CardHeader
            title={title}
            subtitle={date}
            showExpandableButton={true}
          />
          <CardText className="blog-card-content" expandable={true}>
            {description}
          </CardText>
        </Card>
      </div>
    );
  }
}

BlogCard.propTypes = propTypes;
BlogCard.defaultProps = defaultProps;

export default BlogCard;
