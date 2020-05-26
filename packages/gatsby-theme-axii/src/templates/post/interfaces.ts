export interface Article {
  body: any;
  excerpt: string;
  slug: string;
  date: string;
  title: string;
  language: string;
  comments: boolean;
  tags: string[];
  categories: string[];
  parent: {
    parent: {
      fields: {
        gitLogLatestDate: string;
      } | null;
    };
  };
}

export interface PostPageProps {
  data: {
    article: Article;
    site: {
      siteMetadata: {
        siteUrl: string;
        siteDescription: string;
        author: {
          name: string;
        };
        comments: {
          disqus: {
            shortname: string;
          };
        };
      };
    };
  };
}
