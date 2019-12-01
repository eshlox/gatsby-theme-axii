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
    };
    site: {
      siteMetadata: {
        siteUrl: string;
        siteTitle: string;
        siteDescription: string;
        author: {
          name: string;
        };
      };
    };
  };
}
