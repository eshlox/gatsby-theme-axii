export default interface FooterProps {
  site: {
    siteMetadata: {
      author: {
        email: string;
        name: string;
      };
      social: {
        twitter: { url: string };
        github: { url: string };
        linkedin: { url: string };
        telegram: { url: string };
      };
    };
  };
}
