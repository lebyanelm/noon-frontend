import React, { lazy, Suspense } from 'react';

const LazyWeatherResult = lazy(() => import('./WeatherResult'));

const WeatherResult = props => (
  <Suspense fallback={null}>
    <LazyWeatherResult {...props} />
  </Suspense>
);

export default WeatherResult;
