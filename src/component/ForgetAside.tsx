import React from 'react';
import { AsideAll } from './AsideAll';

interface ForgetAsideProps {
  DarkLogo: string;
}

export function ForgetAside({ DarkLogo }: ForgetAsideProps) {
  return (
    <div className="create-aside">
      <AsideAll DarkLogo={DarkLogo} />
    </div>
  );
}
