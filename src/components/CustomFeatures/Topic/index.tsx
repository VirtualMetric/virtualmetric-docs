import React from 'react';

import Link from '@docusaurus/Link';
import TopicList from '@site/docs/topics.json';

interface TopicProps {
  id: keyof typeof TopicList;
  children: React.ReactNode;
}

function Topic({ id, children }: TopicProps) {
  return <Link to={TopicList[id]}>{children}</Link>;
}

export default Topic;
