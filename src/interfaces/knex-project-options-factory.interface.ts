import {
  KnexProjectOptions,
} from './knex-project-options.interface';

export interface KnexProjectOptionsFactory {
  createKnexProjectOptions():
    | Promise<KnexProjectOptions>
    | KnexProjectOptions;
}
