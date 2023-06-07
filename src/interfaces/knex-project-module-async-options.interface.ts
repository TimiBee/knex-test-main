/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import {
  KnexProjectOptions,
} from './knex-project-options.interface';
import {
  KnexProjectOptionsFactory,
} from './knex-project-options-factory.interface';

export interface KnexProjectAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<KnexProjectOptionsFactory>;
  useClass?: Type<KnexProjectOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<KnexProjectOptions> | KnexProjectOptions;
}