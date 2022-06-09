import React from 'react';

import { container } from 'modules/app/ioc/container';

import { Internal_InjectionContext } from './InjectionContext';

interface IInjectionProviderProps {
  children: JSX.Element;
}

export const InjectionProvider: React.FC<IInjectionProviderProps> = (props) => {
  return <Internal_InjectionContext.Provider {...props} value={container} />;
};
