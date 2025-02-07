import React from 'react';

interface DocLinkProps {
  title: string;
  heading: string;
}

const links = {
  normalization: "/administration/pipelines/normalization",
  routes: "/administration/routes",
  eStreamer: "appendix#estreamer",
};

function linkFor(heading: string): string {
  return links[heading] || "Document not found";
}

const DocLink = (props: DocLinkProps) => {
  return (
    <a target="_self" href={linkFor(props.heading)}>{props.title}</a>
  )
}

export default DocLink;
