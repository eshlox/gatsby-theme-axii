export default interface PostPageProps {
  data: {
    mdx: {
      body: any;
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
        language: string;
      };
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
