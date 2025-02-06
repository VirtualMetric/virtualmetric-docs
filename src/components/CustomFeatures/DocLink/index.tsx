import React from 'react';

const links = {
  normalization: "/administration/pipelines/normalization",
  routes: "/administration/routes",
};

function linkFor(heading: string): string {
  return links[heading] || "Document not found";
}

const DocLink = (props: any) => {
  return (
    <a target="_self" href={linkFor(props.heading)}>{props.caption}</a>
  )
}

export default DocLink;
