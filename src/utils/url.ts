/**
 * Get the base URL from import.meta.env.BASE_URL
 * This will be / for custom domains and /repo-name/ for GitHub Pages
 */
export const getBaseUrl = (): string => {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
};

/**
 * Generate a URL path that works in both GitHub Pages and custom domains
 * @param path - The path to generate (e.g., /blog/post-1)
 * @returns The complete URL path with proper base URL
 */
export const getUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  const cleanPath = path.replace(/^\//, "");
  return `${baseUrl}/${cleanPath}`.replace(/\/+/g, "/");
};
