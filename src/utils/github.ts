/**
 *
 * @param repoUrl
 * @returns
 */
export function getRepoInfoFromUrl(repoUrl: string) {
  try {
    const cleanedUrl = repoUrl.replace(/\/+$/, "");
    const url = new URL(cleanedUrl);
    const pathParts = url.pathname.split("/").filter(Boolean);
    if (pathParts.length < 2) {
      throw new Error("Invalid GitHub repository URL");
    }
    const owner = pathParts[pathParts.length - 2];
    const repo = pathParts[pathParts.length - 1].replace(/\.git$/, "");
    return { owner, repo };
  } catch (error) {
    console.error("Error parsing repository URL:", error);
    throw new Error("Failed to extract repository information from URL");
  }
}
