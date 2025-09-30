import React, { Suspense, lazy } from 'react';
import '@testing-library/jest-dom';

const NewsletterInput = lazy(() =>
  import('./NewsletterInput').then((module) => ({ default: module.default }))
);

const LazyNewsletterInput: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NewsletterInput />
  </Suspense>
);

export default React.memo(LazyNewsletterInput);
