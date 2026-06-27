import { useEffect } from 'react';
import { SCHEMAS } from '../data/projectData';

export default function SchemaInjector() {
  useEffect(() => {
    // Generate script tags for each schema (including BreadcrumbList and RealEstateListing)
    const scripts: HTMLScriptElement[] = [];

    Object.entries(SCHEMAS).forEach(([key, schemaObj]) => {
      // Ensure we verify correct types and domains for local search visibility
      const script = document.createElement('script');
      script.id = `jsonld-schema-${key}`;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
      scripts.push(script);
    });

    // Clean up on unmount
    return () => {
      scripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
}
