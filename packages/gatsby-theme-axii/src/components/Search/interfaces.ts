export default interface SearchSettingsProps {
  site: {
    siteMetadata: {
      search: {
        algolia: {
          posts: {
            applicationId: string;
            searchApiKey: string;
          };
        };
      };
    };
  };
}
