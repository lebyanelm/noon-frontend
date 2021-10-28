import React, { lazy, Suspense } from 'react';

const LazyForecast = lazy(() => import('./Forecast'));

const Forecast = props => (
  <Suspense fallback={null}>
    <LazyForecast {...props} />
  </Suspense>
);

export default Forecast;
