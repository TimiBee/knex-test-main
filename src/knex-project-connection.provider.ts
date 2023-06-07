import { KNEX_PROJECT_CONNECTION} from './constants';
import {KnexProjectService} from './knex-project.service'

export const connectionFactory = {
  provide: KNEX_PROJECT_CONNECTION,
  useFactory: async knexProjectService => {
    return knexProjectService.getKnex();
  },
  inject: [KnexProjectService],
};