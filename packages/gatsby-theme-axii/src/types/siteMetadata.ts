export interface SiteMetaData {
  siteUrl: string;
  siteDescription: string;
  author: {
    nickname: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    site: string;
    gender: string;
  };
  social: {
    twitter: {
      handle: string;
      url: string;
    };
    github: {
      url: string;
    };
    linkedin: {
      url: string;
    };
    telegram: {
      url: string;
    };
  };
  manifest: {
    name: string;
    short_name: string;
  };
  support: {
    buymeacoffee: {
      url: string;
    };
  };
  comments: {
    disqus: {
      shortname: string;
    };
  };
  search: {
    algolia: {
      posts: {
        applicationId: string;
        searchApiKey: string;
        adminApiKey: string;
        indexName: string;
      };
    };
  };
  errorReporting: {
    sentry: {
      dsn: string;
    };
  };
}
