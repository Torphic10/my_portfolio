import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function useSEO({
  title,
  description,
  image,
  url,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — Portfolio`
      : 'Web App Developer • AI-Powered Product Builder • Booking Systems Expert';

    const desc =
      description ||
      'I build web apps that make businesses run better. From custom booking platforms to intelligent business management systems.';

    const img = image || 'https://bolt.new/static/og_default.png';

    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', desc);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:image', img, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', img);

    if (url) {
      setMeta('og:url', url, 'property');
    }
  }, [title, description, image, url]);
}
