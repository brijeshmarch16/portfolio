import type { BlogPostingSchema, PersonSchema, WebSiteSchema } from "@/lib/json-ld";

type JsonLdSchema = PersonSchema | WebSiteSchema | BlogPostingSchema;

export interface JsonLdProps {
  schema: JsonLdSchema | Array<JsonLdSchema>;
}

export function JsonLd({ schema }: JsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((item, index) => (
        <script
          // biome-ignore lint/suspicious/noArrayIndexKey: index is used as a key
          key={index}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify is safe
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
