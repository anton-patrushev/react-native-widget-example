import React from 'react';
import { container } from 'modules/app/ioc/container';

const injectionContextDefaultValue = container;

export type InjectionContextValue = typeof injectionContextDefaultValue;

export const Internal_InjectionContext = React.createContext(
  injectionContextDefaultValue,
);
