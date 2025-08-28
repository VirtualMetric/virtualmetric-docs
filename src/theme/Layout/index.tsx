import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';
import { persistDetailsState } from '../../utils/detailsPersistence';

export default function CustomLayout(props: Props): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    console.log('Layout mounted, initializing details persistence');
    persistDetailsState();
  }, []);

  useEffect(() => {
    console.log(`Route changed to: ${location.pathname}`);
    // Re-initialize persistence when route changes
    const timer = setTimeout(() => {
      persistDetailsState();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <Layout {...props} />;
}
