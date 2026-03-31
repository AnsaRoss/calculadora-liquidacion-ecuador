import { Link } from 'react-router-dom';
import SeoHead from './SeoHead';
import SiteFooter from './SiteFooter';

function ContentPage({
  eyebrow,
  title,
  description,
  path,
  paragraphs,
  structuredDataType = 'Article',
  pageType = 'article',
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': structuredDataType,
    headline: title,
    description,
    inLanguage: 'es-EC',
  };

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        path={path}
        type={pageType}
        structuredData={structuredData}
      />

      <main className="app-shell page-home">
        <article className="seo-page">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>

          <div className="seo-content">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <Link className="primary-button seo-link" to="/">
            Usar calculadora
          </Link>
        </article>

        <SiteFooter />
      </main>
    </>
  );
}

export default ContentPage;
