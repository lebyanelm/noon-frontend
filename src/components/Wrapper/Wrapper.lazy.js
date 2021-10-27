import React, { lazy, Suspense } from 'react';

const LazyWrapper = lazy(() => import('./Wrapper'));

const Wrapper = props => (
  <Suspense fallback={null}>
    <LazyWrapper {...props} />
  </Suspense>
);

export default Wrapper;
