const links = {
  "normalization": "/administration/pipelines/normalization"
}

export function linkFor(chapter: string): string {
  console.log("Selam");
  return links[chapter] || "Chapter not found";
}