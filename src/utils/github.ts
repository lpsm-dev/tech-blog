export function getRepoInfoFromUrl(repoUrl: string) {
  try {
    // Remove qualquer barra no final da URL
    const cleanedUrl = repoUrl.replace(/\/+$/, "");

    // Cria um objeto URL para manipulação segura
    const url = new URL(cleanedUrl);

    // Extrai o caminho da URL (ex: "/lpsm-dev/docker-crypto-miner")
    const pathParts = url.pathname.split("/").filter(Boolean);

    // Verifica se o caminho tem pelo menos duas partes (owner e repo)
    if (pathParts.length < 2) {
      throw new Error("Invalid GitHub repository URL");
    }

    // O owner é a penúltima parte do caminho
    const owner = pathParts[pathParts.length - 2];

    // O repo é a última parte do caminho, removendo possíveis extensões ou parâmetros
    const repo = pathParts[pathParts.length - 1].replace(/\.git$/, "");

    return { owner, repo };
  } catch (error) {
    console.error("Error parsing repository URL:", error);
    throw new Error("Failed to extract repository information from URL");
  }
}
