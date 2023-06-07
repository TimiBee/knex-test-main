import { KnexProjectOptions } from './interfaces';

import { KNEX_PROJECT_OPTIONS } from './constants';

export function createKnexProjectProviders(
  options: KnexProjectOptions,
) {
  return [
    {
      provide: KNEX_PROJECT_OPTIONS,
      useValue: options,
    },
  ];
}
