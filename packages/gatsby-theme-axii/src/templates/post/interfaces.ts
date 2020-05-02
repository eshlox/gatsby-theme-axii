export default interface PostPageProps {
  data: {
    article: {
      body: any;
      excerpt: string;
      slug: string;
      date: string;
      title: string;
      language: string;
      comments: boolean;
      tags: string[];
      categories: string[];
    };
    site: {
      siteMetadata: {
        siteUrl: string;
        siteTitle: string;
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
