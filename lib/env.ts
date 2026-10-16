function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  // Provided automatically by Vercel at build and run time.
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  return "http://localhost:3000";
}

/** Canonical origin for metadata, the sitemap and structured data (no trailing slash). */
export const siteUrl = resolveSiteUrl();

/** Only the Vercel production deployment is indexed; previews and local builds stay out of search. */
export const isIndexable = process.env.VERCEL_ENV === "production";
