export default interface SeoProps {
  children?: React.ReactChildren;
  title: string;
  description?: string;
  pathname: string;
  image?: string;
  url?: string;
  language?: string;
}
