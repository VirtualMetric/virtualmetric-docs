import React from "react";
import DocCardList from "@theme/DocCardList";

import { useAllDocsData, useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import { PropSidebarItem } from "@docusaurus/plugin-content-docs";

const FilteredDocCardList = ({ tag }) => {
  const allDocsData = useAllDocsData();
  const sidebar = useDocsSidebar();

  if (sidebar == null) {
    return <p>No sidebar found.</p>;
  }

  // Collect all documents from all doc plugins
  const allDocs = Object.values(allDocsData)
    .flatMap((plugin) => plugin.docs)
    .filter((doc) => doc.frontMatter.tags?.includes(tag)); // Filter by tag

  if (allDocs.length === 0) {
    return <p>No documents found with tag: {tag}</p>;
  }

  // Convert filtered docs into the format expected by DocCardList
  const items = allDocs.map((doc: PropSidebarItem) => ({
    type: "doc",
    id: doc.id,
  }));

  return <DocCardList items={items} />;
};

export default FilteredDocCardList;

/*
// Use
import FilteredDocCardList from "@site/src/components/CustomFeatures/FilteredDocCardList";

<FilteredDocCardList tag="{props.tags}" />;
*/
