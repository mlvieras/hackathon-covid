import React from 'react';

import { Layout } from './layout';

const withLayout = (layoutType, Component) => (
  props => (
    <Layout layoutType={layoutType}>
      <Component {...props} />
    </Layout>
  )
);

export { withLayout };
