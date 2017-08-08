import { observable, action, computed } from 'mobx';
import _ from 'lodash';

export class BlogStore {
  @observable blogsRegistry = observable.map();

  clear() {
    this.blogsRegistry.clear();
    this.page = 0;
  }

  @computed get articles() {
    return this.blogsRegistry.values();
  };

  @action requestTistoryRSS(rssUrl) {
    feednami.load(rssUrl, (res) => {
      const blogs = _.map(res.feed.entries, article => {
        return {
          guid : article.guid,
          title : article.title,
          link : article.link,
          date : article.date,
          description: article.description,
          showDetails: false,
        };
      });
      _.forEach(blogs, article => {
        this.blogsRegistry.set(article.guid, article);
      });
    });
  };

  @action toggleDetail(guid) {
    this.blogsRegistry.get(guid).showDetails = !this.blogsRegistry.get(
      guid).showDetails;
  }
}
export default new BlogStore();
