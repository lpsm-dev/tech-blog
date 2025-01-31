/**
 * Generate an absolute URL for an image
 * Ensures the image URL is properly resolved based on Astro's base URL
 * @param imageUrl - The relative or absolute URL of the image
 * @returns The absolute URL of the image
 */
export const getAbsoluteImageUrl = (imageUrl: string): string => {
  if (!imageUrl) return "";
  try {
    return new URL(imageUrl, import.meta.env.SITE).toString();
  } catch (error) {
    console.error(`Failed to resolve image URL: ${imageUrl}`, error);
    return imageUrl;
  }
};
