import React from 'react';

import { interfaces } from 'inversify';
import { Internal_InjectionContext } from './InjectionContext';

export function useInjection<Dependency>(
  serviceIdentifier: interfaces.ServiceIdentifier<Dependency>,
): Dependency {
  const container = React.useContext(Internal_InjectionContext);

  const dependency = container.get<Dependency>(serviceIdentifier);

  if (!dependency) {
    throw new Error(
      `Dependency for the "${serviceIdentifier.toString()}" service identifier is unavailable`,
    );
  }

  return dependency;
}
