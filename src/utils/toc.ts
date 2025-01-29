export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function generateToc(html: string): TocItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const toc: TocItem[] = [];

  headings.forEach((heading) => {
    toc.push({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.substring(1)),
    });
  });

  return toc;
}
