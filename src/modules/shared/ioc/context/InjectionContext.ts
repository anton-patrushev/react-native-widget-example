import React from 'react';
import { DIContainer } from 'modules/app/ioc/container';

const injectionContextDefaultValue = DIContainer.container;

export type InjectionContextValue = typeof injectionContextDefaultValue;

export const Internal_InjectionContext = React.createContext(
  injectionContextDefaultValue,
);
