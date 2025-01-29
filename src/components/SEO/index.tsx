import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

const SEO: React.FC<SEOProps> = ({
  title = "Головна | Taras Chirkov",
  description = "Тут я експерементую ",
  keywords = "todo, task manager, productivity, планування",
  image = "/public/favicon.ico",
  url = "https://yourdomain.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
