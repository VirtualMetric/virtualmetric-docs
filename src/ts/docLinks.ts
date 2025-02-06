const links = {
  normalization: "/administration/pipelines/normalization",
};

export function linkFor(chapter: string): string {
  return links[chapter] || "Chapter not found";
}
