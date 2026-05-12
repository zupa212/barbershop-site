import { Helmet } from "react-helmet";
import {
  siteConfig,
  toAbsoluteUrl,
} from "@/lib/seo";
import type { SeoPage } from "@/lib/seo";

type SEOProps = {
  page: SeoPage;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SEO = ({ page, schema = [] }: SEOProps) => {
  const canonicalUrl = toAbsoluteUrl(page.path);
  const imageUrl = toAbsoluteUrl(page.image || siteConfig.defaultImage);
  const schemas = Array.isArray(schema) ? schema : [schema];
  const graph = schemas.filter(Boolean);

  return (
    <Helmet htmlAttributes={{ lang: "el" }}>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="keywords" content={page.keywords.join(", ")} />
      <meta name="author" content={siteConfig.author} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={imageUrl} />

      <meta name="geo.region" content="GR-B" />
      <meta name="geo.placename" content="Θεσσαλονίκη" />

      {graph.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": graph,
            },
            null,
            2
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
