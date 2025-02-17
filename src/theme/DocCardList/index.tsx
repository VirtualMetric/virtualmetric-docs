import React, { JSX } from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';

interface DocCardListProps {
  items?: any[];
  className?: string;
  category?: string; // New prop for category filtering
}

function DocCardListForCurrentSidebarCategory({ className, category }: DocCardListProps) {
  const sidebarCategory = useCurrentSidebarCategory();
  return <DocCardList items={sidebarCategory.items} className={className} category={category} />;
}

export default function DocCardList({ items, className, category }: DocCardListProps): JSX.Element {
  if (!items) {
    return <DocCardListForCurrentSidebarCategory className={className} category={category} />;
  }

  const filteredItems = filterDocCardListItems(items).filter((item) => {
    return !category || item.customProps?.customCategory === category; // Filter by category if provided
  });

  return (
    <section className={clsx('row', className)}>
      {filteredItems.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        filteredItems.map((item, index) => (
          <article key={index} className="col col--6 margin-bottom--lg">
            <DocCard item={item} />
          </article>
        ))
      )}
    </section>
  );
}
